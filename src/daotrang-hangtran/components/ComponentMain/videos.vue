<template>
  <div id="news_detail">
    <div id="message">
			<p class="title-list uppercase"><b>{{title}}</b></p>
		</div>
    <video-list class="article-box"/>
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
    this.title = 'Video Hộ Niệm'
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
