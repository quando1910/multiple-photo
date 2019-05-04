<template>
  <div>
    <div id="message">
			<p class="title-list uppercase"><b>Thư viện bài đọc</b></p>
		</div>
    <div class="article-box">
        <img :src="file.thumbnail | takeImage">
        <h2>{{file.title}}</h2>
        <p>{{file.desc}}</p>
        <embed width="100%" height="900px" name="plugin" :src="file.path | takeImage" type="application/pdf">
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'File',
  data() {
    return {
      file: null,
    }
  },
  created () {
    this.$http.get(`public/files/${this.$route.params.id}`).then(res => {
      this.file = res.body
    })
  }
}
</script>
<style lang="scss">
.article-box {
  margin: 40px;
}
.sound-box {
  border-bottom: 1px solid white;
  padding: 20px 0;
  h2 {
    font-size: 1rem;
  }
}
</style>