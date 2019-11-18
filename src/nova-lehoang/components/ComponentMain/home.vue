<template>
  <div class="wrapper">
    <div class="header-height" style="height: 84px;"></div>
    <section>
      <el-carousel :autoplay="false" indicator-position="outside">
        <el-carousel-item v-for="(item,index) in slides" :key="index">
          <div class="cover-img-div" :style="{'background-image': `url(${item.source})`}" alt="img"></div>
        </el-carousel-item>
      </el-carousel>
    </section>
    <!-- /Hero Section -->
    <section class="portfolio-section padding">
      <div class="container">
        <CategoryPicture :title="'prewedding'" :categoryName="'noname'" :pictures="picturesType1" />
        <CategoryPicture :title="'WEDDING JOURNALISM'" :categoryName="'noname'" :pictures="picturesType2" />
        <CategoryVideo :title="'event'" :categoryName="'noname'" :pictures="picturesType3" />
        <CategoryPicture :title="'flycam'" :categoryName="'noname'" :pictures="picturesType4" />
      </div>
    </section>
    <!-- /Portfolio Section -->
  </div>
</template>
<script>
import Vue from "vue";
import * as types from "../../store/types";
import "../../assets/js/imagesloaded.pkgd.min.js";
import CategoryPicture from '../ComponentGlobal/categoryPicture.vue'
import CategoryVideo from '../ComponentGlobal/CategoryVideo.vue'

export default {
  name: "Home",
  components: {
    CategoryPicture,
    CategoryVideo
  },
  data() {
    return {
      pictureFilter: [],
      pictures: [],
      picturesType1: [],
      picturesType2: [],
      picturesType3: [],
      picturesType4: [],
      current: 0,
      slides: [
        { source: require("../../assets/img/slide-1.jpg") },
        { source: require("../../assets/img/slide-2.jpg") },
        { source: require("../../assets/img/slide-3.jpg") },
        { source: require("../../assets/img/slide-4.jpg") },
        { source: require("../../assets/img/slide-5.jpg") },
        { source: require("../../assets/img/slide-6.jpg") },
        { source: require("../../assets/img/slide-7.jpg") }
      ]
    };
  },
  created() {
    const payload = { agencyId: this.agencyId, type: 1 };
    this.$http.get("public/pictures").then(res => {
      this.pictures = res.body;
      this.picturesType1 = this.filterType(1)
      this.picturesType2 = this.filterType(2)
      this.picturesType3 = [
        {
          src: 'shDBXVMlqVk',
        },
        {
          src: 'shDBXVMlqVk',
        },
        {
          src: 'shDBXVMlqVk',
        }
      ]
      this.picturesType4 = this.filterType(4)
      this.pictureFilter = this.pictures;
      this.result = true;
    });
    this.pictureFilter = this.pictures;
    this.result = true;
  },
  methods: {
    filterType(id){
      let temp = 0;
      let arr = [];
      this.pictures.map(pic => {
        if(temp < 3 && pic.type === id){
          temp++;
          arr.push(pic);
        }
      })
      return arr;
    },
    filterImage(e) {
      this.current = e.target.getAttribute("data-filter");
      this.pictureFilter = [];
      if (e.target.getAttribute("data-filter") != "0") {
        this.pictureFilter = this.pictures.filter(
          x => x.type == e.target.getAttribute("data-filter")
        );
      } else {
        this.pictureFilter = this.pictures;
      }
      this.$nextTick(() => this.$redrawVueMasonry());
    },
    directToAlbum() {
      if (this.current == 1 || this.current == 0) {
        this.$router.push("/prewedding/albums");
      }
      if (this.current == 2) {
        this.$router.push("/journal/albums");
      }
      if (this.current == 3) {
        this.$router.push("/event/albums");
      }
      if (this.current == 4) {
        this.$router.push("/event/albums");
      }
    }
  }
};
</script>
<style>
.news-item {
  width: calc(100% / 3);
  padding: 0 0.4rem;
  margin-bottom: 0.8rem;
  display: inline-block;
  vertical-align: top;
}
.cover-img,
.news-list {
  width: 100%;
}
.el-carousel__container {
  padding-bottom: 40%;
}
.cover-img-div {
  position: relative;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.staggered-transition {
  transition: all 0.5s ease;
  overflow: hidden;
  margin: 0;
  height: 20px;
}
.staggered-enter,
.staggered-leave {
  opacity: 0;
  height: 0;
}
.title {
  padding: 10px;
  background-color: #f3f3f3;
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: capitalize;
  color: #777777;
  display: flex;
  justify-content: space-between;
  border-top: 5px solid #777777;
}
.title button, .title button:hover {
  background-color: #f3f3f3;
  border: 0;
  color: #777777;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  padding: 0 5px;
  border-radius: 5px;
}
.title button:active {
  background-color: #7a7a7a;
}
.category .list-item {
  position: relative;
  height: 200px;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 5px;
}

@media (max-width: 768px) {
  .category .list-item { 
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 576px) {
  .category .list-item { 
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
