<template>
  <div class="card-wrap" :style="{backgroundColor: color}">
      <div class="card-title">{{ title }}</div>
      <span class="card-icon" :class="`icon-${icon} ${rotate && 'rotate'}`"></span>
      <div class="card-num">{{ num }}</div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        num: Number,
        icon: String,
        color: String,
        rotate: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.card {
    &-wrap {
        flex: 1;
        min-width: 265px;
        margin-right: 30px;
        position: relative;
        color: #fff;
        height: 115px;
    }
    &-title {
        font-size: @topBlockTitleFontSize;
        font-weight: @topBlockTitleWeight;
        position: absolute;
        top: 18px;
        left: 10px;
    }
    &-icon {
        position: absolute;
        left: 50%;
        top: -10px;
        transform: translateX(-50%);
        font-size: @topBlockIconSize;
        opacity: @topBlockIconOpacity;
        &.rotate {
            left: 35%;
            animation: rotate 2s linear infinite;
        }
    }
    &-num {
        position: absolute;
        bottom: 0px;
        right: 20px;
        font-size: @topBlockNumberFontSize;
    }
}
</style>