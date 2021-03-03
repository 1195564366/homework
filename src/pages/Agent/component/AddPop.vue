<template>
  <div
    class="popover-wrap"
    :class="show && 'show'"
    @click="onClose"
  >
    <div class="add-wrap" :style="popStyle" :class="type" @click.stop>
      <span class="add-wrap-close icon-close" @click="onClose"/>
      <div class="title">Separate multiple resource name whith commas</div>
      <div class="input-wrap">
        <input type="text" v-model="value" placeholder="Input value" />
      </div>
      <div class="footer">
        <button class="btn submit" @click="onSubmit">Add Resource</button>
        <button class="btn cancel" @click="onClose">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      show: false,
      value: '',
      top: 0,
      left: 0,
      type: null
    };
  },
  computed: {
    popStyle () {
      return {
        top: this.top + 'px',
        left: this.left + 'px'
      }
    }
  },
  methods: {
    open (agent, x, y) {
      const { clientHeight } = document.body;
      const PopHeight = 190;
      let top = x + 45,
          left = y - 18;
      const { resources, id } = agent;
      if (top + PopHeight > clientHeight) {
        top = top - PopHeight - 45;
        this.type = 'uper'
      }
      this.top = top;
      this.left = left;
      this.value = resources.join(',');
      this.id = id;
      this.show = true;
    },
    onSubmit () {
      const resource = Array.from(new Set(this.value.split(',')));
      this.$emit('onSubmit', this.id, resource);
      this.onClose();
    },
    onClose () {
      this.type = '';
      this.value = '';
      this.show = false
    }
  }
};
</script>

<style lang="less" scoped>
.popover-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: none;
  &.show {
    display: block;
  }
  .add-wrap {
    position: fixed;
    width: 570px;
    border: 1px solid @themeColor;
    padding: 30px 13px 18px 18px;
    background-color: #fff;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &::before {
      content: "";
      display: block;
      border-left: 8px solid transparent;
      border-bottom: 18px solid @themeColor;
      border-right: 8px solid transparent;
      position: absolute;
      top: -18px;
      left: 22px;
      font-size: 0;
      line-height: 0;
    }
    &::after {
      content: "";
      display: block;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      position: absolute;
      left: 22px;
      font-size: 0;
      line-height: 0;
      top: -16px;
      border-bottom: 18px solid #fff;
    }
    &.uper {
      &::before {
        top: auto;
        bottom: -18px;
        transform: rotate(180deg);
      }
      &::after {
        bottom: -16px;
        top: auto;
        transform: rotate(180deg);
      }
    }
    &-close {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: @primaryIconFontSize;
      cursor: pointer;
      color: @primaryButtonColor;
    }
    .title {
      margin-bottom: 12px;
    }
    .input-wrap {
      height: 36px;
      line-height: 36px;
      border: 1px solid #2D4054;
      box-shadow: 0 0px 2px inset #000;
      padding: 0 16px;
      margin-bottom: 22px;
      color: @themeColor;
      input {
        width: 100%;
        outline: none;
        border: none;
        padding: 0;
      }
    }
    .footer {
      display: flex;
      .btn {
        height: 30px;
        line-height: 30px;
        text-align: center;
        min-width: 120px;
        margin-right: 16px;
        color: #FFF;
        outline: none;
        border: none;
        border-radius: 0;
        cursor: pointer;
        &.submit {
          background: @themeColor;
          &:active {
            background: @primaryButtonActiveColor;
          }
        }
        &.cancel {
          background: @sidebarActiveColor;
          &:active {
            background: @sidebarColor;
          }
        }
      }
    }
  }
}
</style>