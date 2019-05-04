<template>
  <div class="dashboard">
    <div class="header-height" style="height: 84px;"></div>
    <section class="page-header bd-bottom padding">
      <div class="container">
        <div class="page-content text-center">
          <h1>{{album.name}}</h1>
          <p>{{album.desc}}</p>
          <span>{{album.checkin}}</span>
        </div>
      </div>
    </section><!-- /page-header -->
    <section class="portfolio-section padding">
      <div class="container">
        <ul v-masonry transition-duration="1s" stagger="0.03s" item-selector=".news-item" class="row news-list">
          <li v-masonry-tile v-bind:key="index" v-for="(post, index) in album.pictures" class="news-item" transition="staggered" stagger="100">
          <div class="portfolio-box">
            <img class="cover-img" :src="post.path | takeImage" @click="showImg(index)" alt="img">
          </div>
          </li>
        </ul>
        <vue-easy-lightbox
          :visible="visible"
          :index="index"
          :imgs="album.pictures.map(x => $options.filters.takeImage(x.path))"
          @hide="handleHide">
        </vue-easy-lightbox>
        <div class="load-more-btn text-center mt-30">
          <a href="http://wowthemez.com/templates/stela/index.html#" class="default-btn">Load More Projects</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AlbumDetail',
  data () {
    return {
      album: {},
      index: 0,
      visible: false
    }
  },
  created () {
    this.$http.get(`public/albums/${this.$route.params.id}`).then(res => {
      this.album = res.body
    })
  },
  methods: {
    showImg (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  }
}
</script>
<style lang="scss">
.portfolio-section {
  .modal {
    display: block;
  }
}
.btn__prev {
  padding: 50px 50px 50px 0;
  transform: translateY(-50%);
}
.btn__next {
  padding: 0px 50px 50px 50px;
  transform: translateY(-50%);
}
  
</style>
