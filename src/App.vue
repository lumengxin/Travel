<template>
  <div id="app">
    <!-- 单页面应用：页面跳转 -> js渲染
    优点：页面切换快； 缺点：首屏慢，SEO差 -->
    <!-- 显示当前路由地址对应的内容 -->
    <!-- Detail 不被缓存,否则发不了请求 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  // name用途：递归组件，取消缓存，devtools
  name: 'App'
}
</script>

<style>
</style>
