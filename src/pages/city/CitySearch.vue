<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名称或者拼音" />
    </div>
    <!-- v-show="keyword" 搜索时，才将List组件覆盖 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
          >
          {{item.name}}
        </li>
        <!-- v-show="!list.length" 逻辑分离 -->
        <li class="search-item border-bottom" v-show="hasNoData">
          没匹配到相关内容
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 删除搜索词时，内容清空
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      // debugger
      this.$store.commit('changeCity', city)
      // 编程式导航
      this.$router.push('/')
    }
  },
  // 使搜到的内容可以滚动
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, { mouseWheel: true, click: true, tap: true })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
      box-sizing border-box
      padding 0 .1rem
  .search-content
    overflow hidden
    z-index 1
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height  .62rem
      padding-left .2rem
      background #fff
      color #666
</style>
