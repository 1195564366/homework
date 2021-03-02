<template>
    <router-link tag="div" class="sidebar-item" :to="path" active-class="sidebar-item-active">
        <span class="sidebar-item__icon" :class="'icon-' + icon" />
        <span class="sidebar-item__title">{{ title }}</span>
    </router-link>
</template>

<script>
export default {
    props: ['icon', 'path', 'title']
}
</script>

<style lang="less" scoped>
    .sidebar-item {
        height: @sidebarItemHeight;
        line-height: @sidebarItemHeight;
        background: @sidebarColor;
        cursor: pointer;
        color: #fff;
        padding-left: 30px;
        &-active {
            background-color: @sidebarActiveColor;
            color: @themeColor;
        }
        &__icon {
            font-size: @sidebarIconFontSize;
            margin-right: 15px;
        }
        &:hover {
            color: @themeColor;
        }
    }
</style>