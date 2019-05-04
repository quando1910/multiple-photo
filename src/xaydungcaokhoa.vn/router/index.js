import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/ComponentMain/home.vue'
import Introduction from '../components/ComponentMain/introduction.vue'
import AboutUs from '../components/ComponentMain/about.vue'
import Articles from '../components/ComponentMain/articles.vue'
import ArticleDetail from '../components/ComponentMain/article.vue'


Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
    		return savedPosition;
    	} else {
			return { x: 0, y: 0 }
		}
	},
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/intro',
      component: Introduction,
      name: 'Introduction'
    },
    {
      path: '/about',
      component: AboutUs,
      name: 'AboutUs'
    },
    {
      path: '/articles',
      component: Articles ,
      name: 'Articles',
      alias: ['/thiet-ke-cong-trinh-thuy-loi', '/thiet-ke-cong-trinh-giao-thong', '/thiet-ke-ha-tang-ky-thuat', '/linh-vuc-khac']
    },
    {
      path: '/articles/:id',
      component: ArticleDetail ,
      name: 'ArticleDetail',
      alias: ['/thiet-ke-cong-trinh-thuy-loi/:id', '/thiet-ke-cong-trinh-giao-thong/:id', '/thiet-ke-ha-tang-ky-thuat/:id', '/linh-vuc-khac/:id']
    }
  ]
})

export default router
