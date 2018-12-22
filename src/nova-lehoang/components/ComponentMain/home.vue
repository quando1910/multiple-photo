<template>
  <div class="wrapper">
    <div class="header-height" style="height: 84px;"></div>
    <section>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in slides" :key="index">
          <div class="cover-img-div" :style="{'background-image': `url(${item.source})`}" alt="img"></div>
        </el-carousel-item>
      </el-carousel>
    </section><!-- /Hero Section -->
    <section class="portfolio-section padding">
        <div class="container">
            <div class="row">
                <ul class="portfolio-filter text-center mb-30">
                    <li :class="{'active' : current == 0}" data-filter="0" @click="filterImage">All</li>
                    <li :class="{'active' : current == 1}" data-filter="1" @click="filterImage">Prewedding</li>
                    <li :class="{'active' : current == 2}" data-filter="2" @click="filterImage">Wedding Journalism</li>
                    <li :class="{'active' : current == 3}" data-filter="3" @click="filterImage">Events</li>
                    <li :class="{'active' : current == 4}" data-filter="4" @click="filterImage">Flycam</li>
                    <li :class="{'active' : current == 5}" data-filter="5" @click="filterImage">Videos</li>
                </ul><!-- /.Work filter -->
            </div>
            <div class="row">
              <ul v-masonry transition-duration="1s" stagger="0.03s" item-selector=".news-item" class="news-list">
                <li v-masonry-tile v-bind:key="index" v-for="(post, index) in pictureFilter" class="news-item" transition="staggered" stagger="100">
                  <div class="portfolio-box">
                    <img class="cover-img" :src="post.link" alt="img">
                    <div class="portfolio-inner">
                        <div class="portfolio-content">
                            <h3>Light Books</h3>
                            <span>Branding</span>
                        </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="load-more-btn text-center mt-30">
                <a href="http://wowthemez.com/templates/stela/index.html#" class="default-btn">Load More Projects</a>
            </div>
        </div>
    </section><!-- /Portfolio Section -->
  </div>
</template>
<script>
import Vue from 'vue'
import * as types from '../../store/types'
import '../../assets/js/imagesloaded.pkgd.min.js'

export default {
  name: 'Home',
  data() {
    return {
      pictureFilter: [],
      current: 0,
      pictures: [
        {
          link: require('../../assets/img/pre1.jpg'),
          type: 1
        },
        {
          link: require('../../assets/img/pre2.jpg'),
          type: 1
        },
        {
          link: require('../../assets/img/pre3.jpg'),
          type: 1
        },
        {
          link: require('../../assets/img/pre4.jpg'),
          type: 1
        },
        {
          link: require('../../assets/img/pre5.jpg'),
          type: 1
        },
        {
          link: require('../../assets/img/pre6.jpg'),
          type: 1
        },
        {
          link: require('../../assets/img/pre7.jpg'),
          type: 1
        },
        {
          link: require('../../assets/img/pre8.jpg'),
          type: 1
        },
        {
          link: require('../../assets/img/pre9.jpg'),
          type: 1
        },{
          link: require('../../assets/img/ps1.jpg'),
          type: 2
        },
        {
          link: require('../../assets/img/ps2.jpg'),
          type: 2
        },
        {
          link: require('../../assets/img/ps3.jpg'),
          type: 2
        },
        {
          link: require('../../assets/img/ps4.jpg'),
          type: 2
        },
        {
          link: require('../../assets/img/ps5.jpg'),
          type: 2
        },
        {
          link: require('../../assets/img/ps6.jpg'),
          type: 2
        },
        {
          link: require('../../assets/img/ps7.jpg'),
          type: 2
        },
        {
          link: require('../../assets/img/ps8.jpg'),
          type: 2
        }
        ],
      slides: [
        {source: require('../../assets/img/slide-1.jpg')},
        {source: require('../../assets/img/slide-2.jpg')},
        {source: require('../../assets/img/slide-3.jpg')},
        {source: require('../../assets/img/slide-4.jpg')}
      ]
    }
  },
  created() {
    const payload = {agencyId: this.agencyId, type : 1}
    // this.$http.get(types.LIST_PICTURES,{params: payload}).then(res => {
      // this.pictures = res.body
      // this.pictureFilter = this.pictures
      // this.result = true
    // })
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
.news-item {
  width: calc(100%/3);
  padding: 0 0.4rem;
  margin-bottom: 0.8rem;
  display: inline-block;
  vertical-align: top;
}
.cover-img, .news-list{
  width: 100%;
}
.el-carousel__container {
  height: 700px !important;
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
  transition: all .5s ease;
  overflow: hidden;
  margin: 0;
  height: 20px;
}
.staggered-enter, .staggered-leave {
  opacity: 0;
  height: 0;
}
</style>
