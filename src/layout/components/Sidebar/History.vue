<template>
  <div class="history-wrap">
      <div class="history-title">
          History
      </div>
      <div class="history-content">
          <div class="history-item">
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    historyList () {
        return ['/agent']
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
        margin-left: 30px;
    }
}
</style>