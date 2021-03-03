<template>
  <div class="history-wrap">
      <div class="history-title">
          History
      </div>
      <ul class="history-content">
          <li class="history-item" v-for="(item, index) in historyList" :key="index">
              {{ item }}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      historyList: []
    }
  },
  watch: {
    '$route' (val) {
      // 当前路由
      if (this.historyList.length > 10) {
        this.historyList.pop();
      }
      this.historyList.unshift(val.path)
    }
  }
}
</script>

<style lang="less" scoped>
.history {
    &-wrap {
        
    }
    &-title {
        color: @historyTitleColor;
        font-size: @historyTitleFontSize;
        margin-left: 15px;
    }
    &-content {}
    &-item {
      color: @historyItemColor;
      font-size: @historyItemFontSize;
      cursor: pointer;
      margin-bottom: 12px;
      &:hover {
        color: @themeColor;
      }
    }
}
</style>