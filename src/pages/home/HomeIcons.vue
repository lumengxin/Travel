<template>
  <div class="icons">
   <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      // debugger
      const pages = []
      this.list.forEach((item, index) => {
        // 将一维数组处理为二维数组
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  // 深度作用选择器 >>> 或者 /deep/ 或者 ::v-deep
  // 使九宫格在图标下方实现滑动
  .icons >>> .swiper-container
    // overflow hidden
    height 0
    padding-bottom 50%
  .icons
    margin-top .2rem
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      // 总元素高不超过25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          height 100%
          display block
          margin 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        color: $darkTextColor
        text-align center
        // css 对过长文字过滤
        /* overflow hidden
        white-space nowrap
        text-overflow ellipsis */
        ellipsis()
</style>
