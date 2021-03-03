<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
@import './style/base.less';
body {
  background-color: #F3F3F3;
  color: #2D4054;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
