<template>
  <div class="wrapper">
    <!-- 初始空数组时会创建，导致开始为最后一张图片 使用v-if -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="img" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        // 默认true播放过快
        autoplay: 5000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透，不受scoped影响
  .wrapper >>> .swiper-pagination-bullet-active
      background #fff
  .wrapper
    width 100%
    // 设置图片宽高比，预留图片位置(图片没加载出来时，不影响布局)
    overflow hidden
    // height 4rem
    height 0
    padding-bottom 35%

    .swiper-img
      width 100%
</style>
