import App from './App'
import Vue from 'vue'
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
import './assets/css/reset.css'
import './assets/css/template.css'
import './assets/css/icons.css'
import './assets/css/news.css'
import './assets/css/real.css'
import './assets/css/tab_info.css'
import './assets/css/nav_menu.css'
import './assets/css/block_news.css'
import './assets/css/block_newvideo.css'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(VueMasonryPlugin)
Vue.use(router)
Vue.use(VueResource)
Vue.use(GlobalComponents)
Vue.use(VueProgressiveImage)


Vue.http.options.root = process.env.SERVER_IP

// Vue.prototype.agencyId = '5bdfb3753daf8b0069e9be0f' /* develop */
Vue.prototype.agencyId = '5c3b6cbe42b1cd0695cec218' /* production */

// set header for all request
Vue.http.headers.common['Access-Token'] = localStorage.getItem('ACCESS_TOKEN')
Vue.http.headers.common['Uid'] = localStorage.getItem('UID')
Vue.http.headers.common['Provider'] = localStorage.getItem('PROVIDER')
Vue.http.headers.common['Agency-Id'] = Vue.prototype.agencyId

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filter,
  i18n,
  directive,
  template: '<App/>',
  components: { App }
})
