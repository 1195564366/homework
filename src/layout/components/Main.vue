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
        padding: 18px 10px 18px 30px;
        height: calc(100vh - 40px - 30px);
        box-sizing: border-box;
        overflow-y: auto;
    }
}
</style>