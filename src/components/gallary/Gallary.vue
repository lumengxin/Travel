<template>
  <div class="container" @click="handleBannerClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img class="gallary-img" :src="item" alt="img" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        // return [
        //   'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        //   'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg'
        // ]
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 解决画廊进入滑动卡顿
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleBannerClick () {
      this.$emit('close')
      // this.$parent.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
