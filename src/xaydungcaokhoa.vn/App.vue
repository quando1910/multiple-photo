<template>
  <div>
    <div id="container">
      <header-nav/>
      <div style="overflow: hidden;">
        <div class="span-20">
          <router-view/>
        </div>
        <div class="span-5 last">
          <sidebar/>
        </div>
      </div>
      <div class="clearfix"/>
      <footer-nav></footer-nav>
    </div>
    <div class="fixed-contain fixed-left">
      <img class="fixed-img" src="./assets/img/fixed1.png">
    </div>
    <div class="fixed-contain fixed-right">
      <img class="fixed-img" src="./assets/img/fixed2.png">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        './static/bootstrap.min.js',
        './static/tether.min.js',
        './static/imagesloaded.pkgd.min.js',
        './static/owl.carousel.min.js',
        './static/smooth-scroll.min.js',
        './static/jquery.isotope.v3.0.2.js',
        './static/venobox.min.js',
        './static/jquery.slicknav.min.js',
        './static/wow.min.js',
        './static/contact.js',
        './static/main.js'
      ]
    }
  },
  created() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', './static/modernizr-2.8.3-respond-1.4.2.min.js')
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
