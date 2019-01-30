import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/ComponentMain/home.vue'
import Article from '../components/ComponentMain/article.vue'
import Articles from '../components/ComponentMain/articles.vue'
import Album from '../components/ComponentMain/albums.vue'
import Video from '../components/ComponentMain/videos.vue'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/danh-sach-bai-viet',
      component: Articles,
      name: 'Articles',
      alias: ['/cam-ket-ho-niem', '/hoi-tuong', '/bai-doc', '/49-ngay', '/khai-thi', '/huong-dan-ho-niem', '/hoa-giai-oan-gia']
    },
    {
      path: '/bai-viet/:id',
      component: Article,
      name: 'Article',
    },
    {
      path: '/albums',
      component: Album,
      name: 'Album',
      alias: ['/hinh-anh', '/bai-nghe']
    },
    {
      path: '/video-ho-niem',
      component: Video,
      name: 'Video'
    }
  ]
})

export default router
