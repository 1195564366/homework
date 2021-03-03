<template>
  <div class="header-wrap">
    <div class="header-logo">
      <img src="~@/assets/svg/logo.svg" alt="" class="logo" />
    </div>
    <div class="header-user">
      <div class="user-avatar">
        <img src="~@/assets/img/avatar.jpg" alt="" class="avatar" />
      </div>
      <span class="icon-angle-down"></span>
      <!-- 选项 -->
      <div class="dropdown-menu-wrap">
        <div class="dropdown-menu-main">
          <div class="dropdown-menu-item">
            <span class="icon-id-card icon" /> Profile
          </div>
          <div class="dropdown-menu-item">
            <span class="icon-sign-in icon" /> Sign Out
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  &-wrap {
    background: #ffffff;
    height: 60px;
    box-shadow: @defaultShadow;
    padding: 0 100px;
    display: flex;
    align-items: center;
    z-index: 1;
  }
  &-logo {
    flex: 1;
    text-align: center;
    .logo {
      width: 100px;
      vertical-align: middle;
    }
  }
  &-user {
    height: 40px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    &:hover {
      .dropdown-menu {
        &-wrap {
          display: block;
        }
      }
      .icon-angle-down {
        transform: rotate(180deg);
      }
    }
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      .avatar {
        width: 100%;
      }
    }
    .icon-angle-down {
      margin-left: 10px;
      vertical-align: middle;
      transition: transform .2s;
    }
    .dropdown-menu {
      &-wrap {
        display: none;
        position: absolute;
        top: 40px;
        right: -20px;
        padding-top: 20px;
      }
      &-main {
        padding: 10px 0;
        width: 120px;
        background: #ffffff;
        box-shadow: @defaultShadow;
      }
      &-item {
        padding: 5px 10px;
        transition: background 0.5s;
        font-size: 13px;
        cursor: pointer;
        .icon {
          margin-right: 5px;
          display: inline-block;
          width: 15px;
        }
        &:hover {
          background: #efefef;
        }
      }
    }
  }
}
</style>