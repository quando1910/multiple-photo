import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/ComponentMain/home.vue'

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
