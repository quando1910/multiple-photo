<template>
  <div class="dashboard">
    <div class="header-height" style="height: 84px;"></div>
    <section class="page-header bd-bottom padding">
      <div class="container">
        <div class="page-content text-center">
          <h2>Album Flycam Tiêu Biểu</h2>
        </div>
      </div>
    </section><!-- /page-header -->
    <section class="portfolio-section padding">
      <div class="container">
        <ul v-masonry transition-duration="1s" stagger="0.03s" item-selector=".news-item" class="row news-list">
          <li v-masonry-tile v-bind:key="index" v-for="(post, index) in album.pictures" class="news-item" transition="staggered" stagger="100">
          <div class="portfolio-box">
            <img class="cover-img" :src="post.path | takeImage" alt="img">
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
    </section>
  </div>
</template>
<script>
export default {
  name: 'AlbumDetail',
  data () {
    return {
      album: {}
    }
  },
  created () {
    this.$http.get(`public/albums/5c51e8121aa8201452aa7979`).then(res => {
      this.album = res.body
    })
  }
}
</script>
