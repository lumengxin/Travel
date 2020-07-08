<template>
  <div class="home-header">
    <div class="header-left">
      <div class="iconfont back-icon">
        <a href="http://www.byooka.com/v19">
          <img src="http://www.byooka.com/v19/static/logo.png" alt="logo" />
        </a>
      </div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
     </div>
    <router-link to="/city">
    <div class="header-right">
      <span class="city">
        <!-- {{this.city}} -->
        <!-- {{this.$store.state.city}} -->
        {{this.doubleCity}}
      </span>
      <span class="iconfont arrow-icon">&#xe65c;</span>
    </div>
    </router-link>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  /* props: {
    city: String
  } */
  computed: {
    // 将city属性映射到computed中
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  // html: font-seze:50px   1rem = 50px
  // 样式中引入样式 @
  // @import "../../assets/styles/varibles.styl";
  // @import "~@/assets/styles/varibles.styl";
  @import "~styles/varibles.styl"
  .home-header
    height $headerHeight
    display flex
    color #fff
    // background #00bcd4
    background $bgColor
    .header-left
      width .64rem
      float left
      text-align center
      margin-top .2rem
      .back-icon
        // text-align center
        // font-size .6rem
        img
          position: absolute;
          top: 4px;
          left: 4px;
          width: 40px;
          height: 40px;
          z-index: 10;
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top: .12rem
      margin-left: .3rem
      padding-left .2rem
      background #fff
      border-radius: .1rem
      color #ccc
    .header-right
      // 长名字时样式不对 --
      // width 1.3rem
      min-width 1.04rem
      padding 0 .1rem
      // --
      float right
      text-align center
      color #ffffff
      .city
        font-size .3rem
        margin-top -.2rem
      .arrow-icon
        font-size .6rem
        top .14rem;
        position relative
</style>
