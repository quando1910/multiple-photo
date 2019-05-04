<template>
  <div>
    <div class="wrapper gray-bg">
      <header-nav :toggle="$route.path === '/'"/>
      <router-view/>
      <!-- <sidebar/> -->
      <footer-nav/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        './static/bootstrap.min.js',
        './static/plugins.js',
        './static/jquery.nivo.slider.pack.js',
        './static/jquery.magnific-popup.min.js',
        './static/isotope.pkgd.min.js',
        './static/venobox.min.js',
        './static/ajax-mail.js',
        './static/owl.carousel.min.js',
        './static/jquery.meanmenu.js',
        './static/imagesloaded.pkgd.min.js',
        './static/jquery.counterup.min.js',
        './static/jquery.waypoints.min.js',
        './static/main.js'
      ]
    }
  },
  created() {
    let recaptchaScript = document.createElement('script')
    document.head.appendChild(recaptchaScript)
    this.arr.forEach(element => {
      let recaptcha = document.createElement('script')
      recaptcha.setAttribute('src', element)
      document.body.appendChild(recaptcha)
    });
  },
  methods: {
  }
};
</script>
<style>
.uppercase {
  text-transform: uppercase;
}
</style>
