<template>
  <div id="news_detail">
    <div id="message">
			<p class="title-list uppercase"><b>{{title}}</b></p>
		</div>
    <image-list class="article-box"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      type: null,
      title: null
    }
  },
  created () {
    if (this.$route.path === '/hinh-anh') {
      this.type = 1
      this.title = 'Hình Ảnh'
    }
    if (this.$route.path === '/bai-nghe') {
      this.type = 2
      this.title = 'Bài Nghe'
    }
    if (this.$route.path === '/video-ho-niem') {
      this.type = 3
      this.title = 'Video Hộ Niệm'
    }
    this.$http.get(`public/articles?type=${this.type}`).then(res => {
      this.articles = res.body
    })
  },
}
</script>

<style>
.article-box {
  margin: 40px;
}
</style>
