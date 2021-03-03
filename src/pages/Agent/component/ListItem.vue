<template>
  <div class="list-item">
    <div class="list-item-cover">
      <img :src="cover[agent.os]" alt="" />
    </div>
    <div class="list-item-main">
      <div class="list-item-info">
        <span class="icon-desktop list-item-icon">
          <span class="list-item-name">{{ agent.name }}</span>
        </span>

        <div class="list-item-status" :class="agent.status">
          {{ agent.status }}
        </div>
        <span class="icon-info list-item-icon">
          <span class="list-item-ip">
            {{ agent.ip }}
          </span>
        </span>
        <span class="icon-folder list-item-icon">
          <span class="list-item-location">{{ agent.location }}</span>
        </span>
      </div>
      <div class="list-item-resources">
        <div class="list-item-resources-left">
          <span class="icon-plus list-item-icon list-item-resources-add" @click="onAdd" ref="AddBtn"/>
        </div>
        <div class="list-item-resources-right">
          <span
            class="list-item-resources-item"
            v-for="(item, index) in agent.resources"
            :key="index"
          >
            {{ item }}
            <span class="icon-trash del-icon" @click="onDel(item)"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import windows from "@/assets/img/windows.png";
import suse from "@/assets/img/suse.png";
import centos from "@/assets/img/cent_os.png";
import ubuntu from "@/assets/img/cent_os.png";
import debian from "@/assets/img/debin.png";

export default {
  props: ["agent", "agentIndex"],
  data() {
    return {
      cover: {
        windows,
        suse,
        centos,
        ubuntu,
        debian,
      },
    };
  },
  methods: {
      onAdd () {
          // 获取右侧主体区域卷曲高度
          const { scrollTop, scrollLeft } = document.querySelector('.agent-wrap');
          // 获取 点击按钮 在 页面的位置
          const { offsetTop, offsetLeft } = this.$refs['AddBtn'];
          const { id } = this.agent;
          this.$emit('onAdd', id, offsetTop - scrollTop, offsetLeft - scrollLeft);
      },
      onDel (item) {
          const { id } = this.agent;
          this.$emit('onDel', id, item);
      }
  }
};
</script>

<style lang="less" scoped>
.list-item {
  background: #fff;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  &-icon {
    font-size: @iconFontSize;
    position: relative;
    top: 1px;
    opacity: 0.7;
  }
  &-cover {
    margin-right: 40px;
  }
  &-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-info {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 30px;
  }
  &-name {
    color: @themeColor;
    margin-left: 10px;
  }
  &-status {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    padding: 2px 7px;
    &.idle {
      background: #7fbc39;
    }
    &.building {
      background: #ff9a2a;
    }
  }
  &-location {
    margin-left: 5px;
  }
  &-resources {
    display: flex;
    justify-items: center;
    align-items: center; 
    &-left {}
    &-right {
      flex: 1;
    }
    &-add {
      display: inline-block;
      min-width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: #fff;
      background-color: @themeColor;
      font-size: @primaryIconFontSize;
      cursor: pointer;
      &:active {
        background-color: #01869A;
      }
    }
    &-item {
      display: inline-block;
      padding: 0 7px;
      margin-left: 10px;
      background-color: #efefef;
      height: 20px;
      line-height: 20px;
      margin-top: 5px;
      .del-icon {
          cursor: pointer;
      }
    }
  }
}
</style>