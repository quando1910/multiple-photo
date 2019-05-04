<template>
  <div>
    <div id="message">
			<p class="title-list uppercase"><b>{{title}}</b></p>
		</div>
    <div class="article-box">
      <article-item v-for="(item, index) of articles" :key="index" :article="item"/>
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
      articles: [],
      type: null,
      title: null
    }
  },
  created () {
    if (this.$route.path === '/cam-ket-ho-niem') {
      this.type = 1
      this.title = 'Cam kết Hộ Niệm'
    }
    if (this.$route.path === '/hoi-huong') {
      this.type = 2
      this.title = 'Hồi hướng'
    }
    if (this.$route.path === '/49-ngay') {
      this.type = 3
      this.title = '49 Ngày'
    }
    if (this.$route.path === '/khai-thi') {
      this.type = 4
      this.title = 'Khai Thị'
    }
    if (this.$route.path === '/huong-dan-ho-niem') {
      this.type = 8
      this.title = 'Hướng dẫn hộ niệm'
    }
    if (this.$route.path === '/hoa-giai-oan-gia') {
      this.type = 9
      this.title = 'Hóa giải oan gia'
    }
    if (this.$route.path === '/an-vi-phat') {
      this.type = 10
      this.title = 'An Vị Phật'
    }
    if (this.$route.path === '/cung-thi-thuc') {
      this.type = 13
      this.title = 'Cúng Thí Thực'
    }
    if (this.$route.path === '/nghi-le-cong-tu') {
      this.type = 14
      this.title = 'Nghi Lễ Cộng Tu'
    }
    if (this.$route.path === '/danh-sach-bai-viet') {
      this.type = this.$route.query.type
      this.title = this.$route.query.key
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
.title-list {
  font-size: 14px !important;
}
</style>