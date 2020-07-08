import Vue from 'vue'
import Router from 'vue-router'
// @ 代表src
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // 路由中异步加载组件，其他任何地方也都可以
      // app.js教小时（<1M），没有必要，http请求代价更高
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  // 路由到新的页面，定位到头部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
