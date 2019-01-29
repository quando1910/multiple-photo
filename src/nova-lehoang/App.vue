<template>
  <div class="wrapper loaded js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
    <div class="site-preloader-wrap">
      <div class="spinner"></div>
    </div><!-- Preloader -->
    <header-nav/>
    <router-view :key="$route.path"/>
    <footer-nav></footer-nav>
    <a data-scroll="" href="http://wowthemez.com/templates/stela/index.html#header" id="scroll-to-top"><i class="arrow_up"></i></a>
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
