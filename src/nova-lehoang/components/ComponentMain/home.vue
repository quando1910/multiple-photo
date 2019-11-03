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
        <div class="categories">
          <div class="title">
            <span>prewedding</span>
          </div>
          <ul class="list" >
            <li v-for="(pic, i) in pictureType1" :key="i" class="list-item">
              <div class="img-size">
                <img
                  :src="pic.path | takeImage"
                  :alt="pic.name"
                />
              </div>
              <div class="item-name">abc</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- /Portfolio Section -->
  </div>
</template>
<script>
import Vue from "vue";
import * as types from "../../store/types";
import "../../assets/js/imagesloaded.pkgd.min.js";

export default {
  name: "Home",
  data() {
    return {
      pictureFilter: [],
      pictureType1: [],
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
      this.pictureType1 = this.pictures.filter((pic, i) => pic.type === 1 && i < 4);
      this.pictureFilter = this.pictures;
      this.result = true;
    });
    this.pictureFilter = this.pictures;
    this.result = true;
  },
  methods: {
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
  background-color: #a0a0a0;
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: capitalize;
  color: white;
}
.categories .list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.categories .list-item {
  position: relative;
  width: calc(25% - 10px);
  height: 170px;
}
.categories .list-item:hover .item-name{
  opacity: 1;
  transition: opacity .6s;
}

.categories .item-name {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid white;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.categories .img-size {
  width: 100%;
  height: 100%;
}
</style>
