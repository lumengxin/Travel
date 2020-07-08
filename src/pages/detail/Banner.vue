<template>
  <div class="banner" @click="handleShowGallary">
    <img class="banner-img" :src="bannerImg" alt="img">
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe63c;</span>
        <span>{{this.bannerImgs.length}}</span>
      </div>
    </div>
    <fade-animation>
      <gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
        >
      </gallary>
    </fade-animation>
  </div>
</template>

<script>
import Gallary from 'components/gallary/Gallary'
// Fade 可以不与Fade.vue同名
import FadeAnimation from 'components/fade/Fade'

export default {
  name: 'DetailBanner',
  components: {
    Gallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
      // imgs: [
      //   'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
      //   'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
      // ]
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
      history.go(0)
      console.log(this.showGallary)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      display flex
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0 ,0, 0, 0.8))!important
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        height .4rem
        line-height .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        margin-top: .1rem;
        .banner-icon
          font-size .24rem
</style>
