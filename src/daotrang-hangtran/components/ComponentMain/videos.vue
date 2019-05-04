<template>
  <div id="news_detail">
    <div id="message">
			<p class="title-list uppercase"><b>{{title}}</b></p>
		</div>
    <video-list :videos="videos" class="article-box"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
      type: null,
      title: null
    }
  },
  created () {
    this.title = 'Video Hộ Niệm'
    this.$http.get(`public/videos`).then(res => {
      this.videos = res.body
    })
  },
}
</script>

<style>
.article-box {
  margin: 40px;
}
</style>
