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

if (process.env.NODE_ENV === 'production') {
  Vue.prototype.agencyId = '5c4065c0c5a78610902e3008' /* production */
} else {
  Vue.prototype.agencyId = '5c1f17433516b702f3a24da6' /* develop */
}

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
