<template>
  <div class="agent-wrap">
    <div class="agent-top">
      <Card
        title="Building"
        :num="cardNum('building')"
        icon="cog"
        :rotate="true"
        color="#ff9a2a"
      />
      <Card title="Idle" :num="cardNum('idle')" icon="coffee" color="#7fbc39" />
      <div class="agent-top-main">
        <div
          class="agent-top-main-item"
          v-for="(item, index) in tabData"
          :key="index"
        >
          <div class="agent-top-main-item__title">{{ item.label }}</div>
          <div class="agent-top-main-item__value">{{ item.value }}</div>
        </div>
      </div>
    </div>
    <div class="agent-middle">
      <div class="agent-middle-left">
        <div
          class="agent-middle-left-item"
          :class="index === tabIndex && 'agent-middle-left-item__active'"
          v-for="(item, index) in tabData"
          :key="index"
          @click="tabIndex = index"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="agent-middle-middle">
        <div class="agent-middle-middle__search">
          <span class="icon-search agent-middle-middle__search-icon" />
          <input type="text" class="agent-middle-middle__search-input" />
        </div>
      </div>
      <div class="agent-middle-right">
        <span
          class="icon-th-card icon"
          :class="listType === 'card' && 'active'"
          @click="listType = 'card'"
        />
        <span
          class="icon-th-list icon"
          :class="listType === 'list' && 'active'"
          @click="listType = 'list'"
        />
      </div>
    </div>
    <div class="agent-bottom">
      <ListItem
        v-for="item in list"
        :key="item.id"
        :agent="item"
        @onDel="onDel"
        @onAdd="onAdd"
      />
    </div>
    <AddPop ref="AddPop" @onSubmit="onSubmit" />
  </div>
</template>

<script>
import { get } from '@/axios';
import Card from './component/Card';
import ListItem from './component/ListItem';
import AddPop from './component/AddPop';

export default {
  components: {
    Card,
    ListItem,
    AddPop
  },
  data () {
    return {
      listType: 'list',
      tabIndex: 0,
      list: []
    }
  },
  computed: {
    tabData () {
      return  [{
        label: 'All',
        value: this.list.length
      }, {
        label: "Physical",
        value: this.list.filter(item => item.type === 'physical').length
      }, {
        label: "Virtual",
        value: this.list.filter(item => item.type === 'virtual').length
      }]
    }
  },
  async mounted () {
    const result = await get('/api/db');
    this.list = result;
  },
  methods: {
    cardNum (type) {
      return this.list.filter(item => item.status === type).length;
    },
    onSubmit (id, resources) {
      const index = this.list.findIndex(item => item.id === id);
      this.list[index].resources = resources;
    },
    onAdd (id, x, y) {
      const index = this.list.findIndex(item => item.id === id);
      this.$refs['AddPop'].open(this.list[index], x, y);
    },
    onDel (id, resourcesName) {
      const index = this.list.findIndex(item => item.id = id);
      this.list[index].resources = this.list[index].resources.filter(item => item !== resourcesName);
    }
  }
}
</script>

<style lang="less" scoped>
.agent {
  &-wrap {
    flex: 1;
  }
  &-top {
    display: flex;
    margin-bottom: 20px;
    &-main {
      flex: 1;
      min-width: 265px;
      display: flex;
      background: #fff;
      display: flex;
      padding: 20px;
      &-item {
        flex: 1;
        text-align: center;
        &__title {
          margin-bottom: 30px;
          font-size: @statisTitleFontSize;
          text-transform: uppercase;
        }
        &__value {
          font-size: @statisNumberFontSize;
        }
      }
    }
  }
  &-middle {
    height: @menuHeight;
    line-height: @menuHeight;
    background: #fff;
    display: flex;
    align-items: center;
    &-left {
      display: flex;
      &-item {
        width: 82px;
        text-align: center;
        border-right: 1px solid #f3f3f3;
        cursor: pointer;
        &__active {
          border-bottom: @menuBorder;
        }
      }
    }
    &-middle {
      flex: 1;
      &__search {
        padding: 8px 8px;
        margin: 10px 30px;
        display: inline-flex;
        align-items: center;
        background-color: #f3f3f3;
        &-icon {
          font-size: 20px;
          margin-right: 10px;
        }
        &-input {
          border: none;
          outline: none;
          background-color: #f3f3f3;
          font-size: 14px;
        }
      }
    }
    &-right {
      .icon {
        font-size: 20px;
        cursor: pointer;
        margin-right: 20px;
        &.active {
          color: @themeColor;
        }
      }
    }
  }
  &-bottom {
    margin-top: 20px;
  }
}
</style>