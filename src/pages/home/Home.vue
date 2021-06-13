<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <p>第一次github actions自动化构建测试 - 6</p>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// import HomeHeader from './HomeHeader'
import HomeSwiper from './HomeSwiper'
import HomeIcons from './HomeIcons'
import HomeRecommend from './HomeRecommend'
import HomeWeekend from './HomeWeekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    // 普通组件异步加载
    HomeHeader: () => import('./HomeHeader'),
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // city: '',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      // static 下文件可以直接通过地址栏访问
      axios.get('/v19/travel/static/mock/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
      // 配置 proxyTable 模拟线上接口(x)
      // axios.get('/api/index.json?city=' + this.city)
      //   .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        // this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconsList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    console.log('mounted')
    this.getHomeInfo()
    this.lastCity = this.city
  },
  // 页面重新显示时钩子，解决使用keep-live 数据被缓存页面重载不请求
  activated () {
    console.log('activated')
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
