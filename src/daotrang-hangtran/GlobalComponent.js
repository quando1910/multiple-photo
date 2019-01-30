import Header from './components/ComponentGlobal/header.vue'
import Footer from './components/ComponentGlobal/footer.vue'
import Articles from './components/ComponentGlobal/articles.vue'
import Sidebar from './components/ComponentGlobal/sidebar.vue'
import ArticleItem from './components/ComponentGlobal/articles-item.vue'
import Box from './components/ComponentGlobal/box.vue'
import LargeBox from './components/ComponentGlobal/large-box.vue'
import ImageList from './components/ComponentGlobal/image-list.vue'
import VideoList from './components/ComponentGlobal/video-list.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('header-nav', Header)
    Vue.component('footer-nav', Footer)
    Vue.component('articles', Articles)
    Vue.component('sidebar', Sidebar)
    Vue.component('box', Box)
    Vue.component('large-box', LargeBox)
    Vue.component('article-item',  ArticleItem)
    Vue.component('image-list',  ImageList)
    Vue.component('video-list',  VideoList)
  }
}

export default GlobalComponents
