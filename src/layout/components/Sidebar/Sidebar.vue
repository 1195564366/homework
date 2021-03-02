<template>
  <div class="sidebar-wrap">
      <div class="sidebar-top">
        <SidebarItem v-for="(route, index) in routes" :key="index" :icon="route.icon" :title="route.title" :path="route.path"/>
      </div>
      <div class="sidebar-bottom">
        <History />
      </div>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem';
import History from './History';

export default {
    components: { SidebarItem, History },
    computed: {
        // 根据路由生成菜单
        routes () {
            return this.$router.options.routes[0].children.map(item => {
                const { path, meta: { title, icon } } = item;
                return {
                    path: `/${path}`,
                    title,
                    icon
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.sidebar {
    &-wrap {
        width: 250px;
        background: @sidebarColor;
        padding: 30px 0 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>