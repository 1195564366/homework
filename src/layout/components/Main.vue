<template>
  <div class="main-wrap">
      <SideBar />
      <router-view class="main-right"/>
  </div>
</template>

<script>
import SideBar from './Sidebar/Sidebar';

export default {
    components: {
        SideBar
    }
}
</script>

<style lang="less" scoped>
.main {
    &-wrap {
        flex: 1;
        display: flex;
        padding:  0 100px;
    }
    &-right {
        padding: 10px 20px;
    }
}
</style>