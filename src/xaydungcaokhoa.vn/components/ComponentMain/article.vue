<template>
  <div id="news_detail">
    <div v-if="article">
      <h1>{{article.title}}</h1>
      <span class="time">{{article.created_at}}</span><br>
    </div>
		<div class="news-control">
      <div id="myDiv"/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Home',
  data() {
    return {
      article: null
    }
  },
  created () {
    this.$http.get(`public/articles/${this.$route.params.id}`).then(res => {
      this.article = res.body
    })
  },
  updated () {
    if (this.article.content) {
      var div = document.getElementById('myDiv')
      $('#myDiv').html(this.article.content)
      $("#myDiv p:has(img) img").each(function(){
        let srcChange= Vue.options.filters.takeImage($(this).attr('src'))
        $(this).attr('src', srcChange)
        $("p:has(img)").css({textAlign: "center"});
      })
    }
  }
}
</script>