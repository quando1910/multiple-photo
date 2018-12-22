import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/store'
import filter from './helper/filter'
import directive from './helper/directive'
import router from './router'
import VueResource from 'vue-resource'
import GlobalComponents from './GlobalComponent'
import VueProgressiveImage from 'vue-progressive-image'
import VueI18n from 'vue-i18n'
import i18n from './locales/config'
import {VueMasonryPlugin} from 'vue-masonry'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/scss/style.scss'
import './assets/css/font-awesome.min.css'
import './assets/css/themify-icons.css'
import './assets/css/elegant-font-icons.css'
import './assets/css/elegant-line-icons.css'
import './assets/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/css/venobox.css'
import './assets/css/owl.carousel.css'
import './assets/css/slicknav.min.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

// import './assets/js/modernizr-2.8.3-respond-1.4.2.min.js'
import './assets/js/jquery-1.12.4.min.js'
// import './assets/js/tether.min.js'
// import './assets/js/imagesloaded.pkgd.min.js'
// import './assets/js/owl.carousel.min.js'
// import './assets/js/smooth-scroll.min.js'
// import './assets/js/venobox.min.js'
// import './assets/js/jquery.slicknav.min.js'
// import './assets/js/wow.min.js'
// import './assets/js/contact.js'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(VueMasonryPlugin)
Vue.use(Vuex)
Vue.use(router)
Vue.use(VueResource)
Vue.use(GlobalComponents)
Vue.use(VueProgressiveImage)

Vue.http.options.root = process.env.SERVER_IP
// Vue.prototype.agencyId = '5bdfb3753daf8b0069e9be0f' /* develop */
Vue.prototype.agencyId = '5bdfc09196ef71002607e572' /* production */
// set header for all request
Vue.http.headers.common['Access-Token'] = localStorage.getItem('ACCESS_TOKEN')
Vue.http.headers.common['Uid'] = localStorage.getItem('UID')
Vue.http.headers.common['Provider'] = localStorage.getItem('PROVIDER')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  filter,
  i18n,
  directive,
  template: '<App/>',
  components: { App }
})
