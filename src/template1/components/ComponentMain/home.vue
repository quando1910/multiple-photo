<template>
</template>
<script>
import Vue from 'vue'
import '../../assets/js/imagesloaded.pkgd.min.js'

export default {
  name: 'Home',
  data() {
    return {
      pictureFilter: [],
      current: 0,
      slides: [
       
      ]
    }
  },
  created() {
    const payload = {agencyId: this.agencyId, type : 1}
    this.$http.get('public/pictures').then(res => {
      this.pictures = res.body
      console.log(this.pictures)
      this.pictureFilter = this.pictures
      this.result = true
    })
    this.pictureFilter = this.pictures
    this.result = true
  },
  methods: {
    filterImage (e) {
      this.current = e.target.getAttribute('data-filter')
      this.pictureFilter = []
      if (e.target.getAttribute('data-filter') != '0') {
        this.pictureFilter = this.pictures.filter( x => x.type == e.target.getAttribute('data-filter'))
      } else {
        this.pictureFilter = this.pictures
      }
      this.$nextTick(() => this.$redrawVueMasonry());
    }
  }
}
</script>
<style>
</style>
