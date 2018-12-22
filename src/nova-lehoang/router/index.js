import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/ComponentMain/home.vue'
import Wedding from '../components/ComponentMain/wedding.vue'
import WeddingLocation from '../components/ComponentMain/wedding-location.vue'
import WeddingAlbums from '../components/ComponentMain/wedding-album.vue'
import Event from '../components/ComponentMain/event.vue'
import Service from '../components/ComponentMain/service.vue'
import About from '../components/ComponentMain/about.vue'
import ArticleDetail from '../components/ComponentMain/article-detail.vue'
import WeddingAlbumsDetail from '../components/ComponentMain/wedding-album-detail.vue'

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
      path: '/wedding/locations',
      component: WeddingLocation,
      name: 'WeddingLocation'
    },
    {
      path: '/wedding/albums',
      component: WeddingAlbums,
      name: 'WeddingAlbums'
    },
    {
      path: '/wedding/albums/:id',
      component: WeddingAlbumsDetail,
      name: 'WeddingAlbumsDetail'
    },
    {
      path: '/event',
      component: Event,
      name: 'Event'
    },
    {
      path: '/service',
      component: Service,
      name: 'Service'
    },
    {
      path: '/articles/:id',
      component: ArticleDetail,
      name: 'ArticleDetail'
    },
    {
      path: '/about',
      component: About,
      name: 'About'
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
