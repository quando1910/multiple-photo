import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/ComponentMain/home.vue'
import Wedding from '../components/ComponentMain/wedding.vue'
import Event from '../components/ComponentMain/event.vue'
import TVC from '../components/ComponentMain/tvc.vue'
import BehindScenes from '../components/ComponentMain/behind-scenes.vue'
import About from '../components/ComponentMain/about.vue'
import ArticleDetail from '../components/ComponentMain/article-detail.vue'
import AlbumsDetail from '../components/ComponentMain/albums-detail.vue'
import Albums from '../components/ComponentMain/albums-page.vue'
import ArticlesPage from '../components/ComponentMain/articles-page.vue'
import ProductsPage from '../components/ComponentMain/products.vue'
import ArtPage from '../components/ComponentMain/art-page.vue'
import Flycam from '../components/ComponentMain/flycam.vue'


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
      path: '/wedding',
      component: Wedding,
      name: 'Wedding'
    },
    {
      path: '/prewedding/albums',
      component: Albums,
      name: 'PreAlbums'
    },
    {
      path: '/journal/albums',
      component: Albums,
      name: 'JournalAlbums'
    },
    {
      path: '/event/albums',
      component: Albums,
      name: 'EventAlbums'
    },
    {
      path: '/albums/:id',
      component: AlbumsDetail,
      name: 'AlbumsDetail'
    },
    {
      path: '/behind-scenes',
      component: BehindScenes,
      name: 'BehindScenes'
    },
    {
      path: '/albums/:id',
      component: AlbumsDetail,
      name: 'AlbumsDetail'
    },
    {
      path: '/event',
      component: Event,
      name: 'Event'
    },
    {
      path: '/tvc',
      component: TVC,
      name: 'TVC'
    },
    {
      path: '/articles/:id',
      component: ArticleDetail,
      name: 'ArticleDetail'
    },
    {
      path: '/wedding/locations',
      component: ArticlesPage,
      name: 'WeddingLocation'
    },
    {
      path: '/wedding/posts',
      component: ArticlesPage,
      name: 'WeddingPost'
    },
    {
      path: '/event/posts',
      component: ArticlesPage,
      name: 'ArticlesPost'
    },
    {
      path: '/about',
      component: About,
      name: 'About'
    },
    {
      path: '/devices',
      component: ProductsPage,
      name: 'Products'
    },
    {
      path: '/artpictures',
      component: ArtPage,
      name: 'ArtPictures'
    },
    {
      path: '/flycam',
      component: Flycam,
      name: 'Flycam'
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth === false) {
//     if (localStorage.getItem('ACCESS_TOKEN')) {
//       next({path: '/app'})
//     } else {
//       next()
//     }
//   } else {
//     if (localStorage.getItem('ACCESS_TOKEN')) {
//       next()
//     } else {
//       next({path: '/auth/login'})
//     }
//   }
// })

export default router
