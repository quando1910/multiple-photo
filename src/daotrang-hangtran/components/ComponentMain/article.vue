<template>
  <div id="news_detail">
    <div>
      <h1>Báo cáo tâm đắc về việc học(Tập 4)</h1>
      <span class="time">Chủ nhật - 18/11/2018  22:52</span>
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
      article: {
        content: 'aaaa<br>bbbbbb'
      }
    }
  },
  mounted () {
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