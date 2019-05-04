<template>
  <div>
    <div id="container">
      <header-nav/>
      <div style="overflow: hidden;">
        <div class="span-20">
          <router-view :key="$route.path"/>
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
