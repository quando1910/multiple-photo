import Header from './components/ComponentGlobal/header.vue'
import Footer from './components/ComponentGlobal/footer.vue'
import TreeChart from './components/ComponentGlobal/tree-chart.vue'
// import Sidebar from './components/ComponentGlobal/sidebar.vue'
// import ArticleItem from './components/ComponentGlobal/articles-item.vue'
// import Box from './components/ComponentGlobal/box.vue'
// import LargeBox from './components/ComponentGlobal/large-box.vue'


/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('header-nav', Header)
    Vue.component('footer-nav', Footer)
    Vue.component('tree-chart', TreeChart)
    // Vue.component('sidebar', Sidebar)
    // Vue.component('box', Box)
    // Vue.component('large-box', LargeBox)
    // Vue.component('article-item',  ArticleItem)
  }
}

export default GlobalComponents
