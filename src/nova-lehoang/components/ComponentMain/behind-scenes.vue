<template>
  <div class="dashboard">
    <div class="header-height" style="height: 84px;"></div>
    <section class="page-header bd-bottom padding">
      <div class="container">
        <div class="page-content text-center">
          <h1>Tham Khảo cách chúng tôi làm việc</h1>
          <h4>Những hình ảnh hậu trường chân thực nhất</h4>
        </div>
      </div>
    </section>
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
        <div class="load-more-btn text-center mt-30">
          <a href="http://wowthemez.com/templates/stela/index.html#" class="default-btn">Load More Projects</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'BehindScenes',
  data () {
    return {
      album: null
    }
  },
  created () {
    this.$http.get(`public/albums/5c4dfbc37a04f42a85ace618`).then(res => {
      this.album = res.body
    })
  }
}
</script>
