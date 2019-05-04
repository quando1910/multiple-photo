<template>
  <div>
    <div id="message">
			<p class="title-list uppercase"><b>Thư viện bài nghe</b></p>
		</div>
    <div class="article-box">
      <div class="sound-box" v-for="(item, index) of sounds" :key="index" >
        <h2>{{item.title}}</h2>
        <p>{{item.desc}}</p>
        <audio class="audio" controls>
          <source src="horse.ogg" type="audio/ogg">
          <source :src="item.path | takeImage" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
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
      sounds: [],
    }
  },
  created () {
    this.$http.get(`public/audios`).then(res => {
      this.sounds = res.body
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