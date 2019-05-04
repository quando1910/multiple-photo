<template>
  <div>
    <div id="message">
			<p class="title-list uppercase"><b>Thư viện bài đọc</b></p>
		</div>
    <div class="article-box">
      <div class="sound-box" v-for="(item, index) of files" :key="index" >
        <router-link :to="{name: 'File', params: {id: item._id}}">
          <h2>{{item.title}}</h2>
          <p>{{item.desc}}</p>
          <img :src="item.thumbnail | takeImage">
          <embed width="191" height="207" name="plugin" :src="item.path | takeImage" type="application/pdf">
        </router-link>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Home',
  data() {
    return {
      files: [],
    }
  },
  created () {
    this.$http.get(`public/files`).then(res => {
      this.files = res.body
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