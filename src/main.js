// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端300ms点击延迟 npm i fastclick --save
import fastClick from 'fastclick'
// 使用轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 解决某些手机不支持es6新特性
import 'babel-polyfill'
// 使用vuex
import store from './store'

// 不同手机样式初始化
// 配置后build alias后 报错重启服务
import 'styles/reset.css'
// 多倍屏1像素显示不同
import 'styles/border.css'
// 引入阿里矢量图标
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // es6中键值相同，简写
  router,
  store,
  components: { App },
  template: '<App/>'
})
