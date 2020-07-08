<template>
  <div class="title">
    热销推荐
    <ul>
      <!-- <router-link to="/detail"> -->
        <!-- 引入一像素边框 border-bottom(x) -->
        <router-link
          tag="li"
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="'/detail/' + item.id"
          >
          <img :src="item.imgUrl" alt="img" class="item-img">
          <div class="item-info">
            <p class="item-title">
              {{item.title}}
            </p>
            <p class="item-desc">
              {{item.desc}}
            </p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
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
    background #eee
    text-indent .2rem
    margin-top .2rem
  .item
    display flex
    overflow hidden
    height 1.9rem
    border: solid 1px rgba(198, 208, 216, 0.3);
    margin-bottom: .2rem;
    background-color: rgba(76, 117, 121, 0.5);
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      // 文字过长不省略(无效)
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .itme-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        position relative
        background-color #ff9300
        margin-top -.5rem
        left .2rem
        border-radius .06rem
        color #fff
</style>
