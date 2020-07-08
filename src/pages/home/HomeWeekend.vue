<template>
  <div class="title">
    周末去哪
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="img" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">
            {{item.title}}
          </p>
          <p class="item-desc">
            {{item.desc}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    margin-bottom: 0.4rem
    background #eee
    text-indent .2rem
    margin-top .2rem
    margin-bottom: .4rem
  .item-img-wrapper
    overflow  hidden
    height 0
    padding-bottom 33.9%
  .item-img
    width 95%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .itme-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
