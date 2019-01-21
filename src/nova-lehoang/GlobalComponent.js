import Header from './components/ComponentGlobal/header.vue'
import Footer from './components/ComponentGlobal/footer.vue'
import Articles from './components/ComponentGlobal/articles.vue'
import Albums from './components/ComponentGlobal/albums.vue'
import ServiceContent from './components/ComponentGlobal/service-content.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('header-nav', Header)
    Vue.component('footer-nav', Footer)
    Vue.component('articles', Articles)
    Vue.component('albums', Albums)
    Vue.component('service-content', ServiceContent)
  }
}

export default GlobalComponents
