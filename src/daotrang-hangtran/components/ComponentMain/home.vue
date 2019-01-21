<template>
  <div>
    <el-carousel height="620px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../assets/img/slide1.jpg" class="cover-img">
      </el-carousel-item>
    </el-carousel>
    <div id="message">
			<p>Những danh mục, bài viết quan trọng nhất</p>
		</div>
    <large-box/>
     <large-box/>
      <large-box/>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import '../../assets/js/imagesloaded.pkgd.min.js'

export default {
  name: 'Home',
  data() {
    return {
      pictureFilter: [],
      current: 0,
      slides: [
       
      ]
    }
  },
  created() {
    const payload = {agencyId: this.agencyId, type : 1}
    this.$http.get('public/pictures').then(res => {
      this.pictures = res.body
      console.log(this.pictures)
      this.pictureFilter = this.pictures
      this.result = true
    })
    this.pictureFilter = this.pictures
    this.result = true
  },
  methods: {
    filterImage (e) {
      this.current = e.target.getAttribute('data-filter')
      this.pictureFilter = []
      if (e.target.getAttribute('data-filter') != '0') {
        this.pictureFilter = this.pictures.filter( x => x.type == e.target.getAttribute('data-filter'))
      } else {
        this.pictureFilter = this.pictures
      }
      this.$nextTick(() => this.$redrawVueMasonry());
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .cover-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
