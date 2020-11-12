<!--
 * @Author: zfd
 * @Date: 2020-11-11 16:29:00
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-12 15:32:24
 * @Description:
-->
<template>
  <div class="app-container tab-page">
    <div class="my-head">
      <div class="my-avatar">
        <img :src="avatarUrl" class="my-avatar-img">
      </div>
      <div class="my-login">
        <template v-if="isLogined">
          <div class="my-phone">{{ userInfo.phone }}</div>
          <div class="my-id">学号：{{ userInfo.id }}</div>
        </template>
        <template v-else>
          <button class="my-login-btn">立即登录</button>
        </template>
      </div>
      <svg-icon class="next" icon-class="next-white" />
    </div>
    <div class="my-tab-c">
      <grid :column-num="2" :border="false" :gutter="10">
        <grid-item icon="photo-o" text="我的课程" to="/" />
        <grid-item icon="photo-o" text="我的订单" to="/" />
      </grid>
    </div>
    <div class="my-menu">
      <div class="my-menu-item">
        <div class="menu-item-l">
          <svg-icon icon-class="" />
          <span class="menu-item-title">我要开课</span>
        </div>
        <svg-icon icon-class="next" />
      </div>
      <div class="my-menu-item menu-last">
        <div class="menu-item-l">
          <svg-icon icon-class="" />
          <span class="menu-item-title">联系我们</span>
        </div>
        <svg-icon icon-class="next" />
      </div>
    </div>
    <tabbar-school />
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
import TabbarSchool from '@/components/Tabbar'
export default {
  name: 'My',
  components: {
    Grid,
    GridItem,
    TabbarSchool
  },
  data() {
    return {
      avatarUrl: require('@/assets/images/nologin.png'),
      isLogined: false,
      userInfo: {
        phone: '13776050390',
        id: '2016339901241'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$bk: #fff;
.my-head {
  padding: 2.5rem 1.25rem;
  background: #43C7FE;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  position: relative;
  .my-avatar {
    width: 6.25rem;
    height: 6.25rem;
    border: 5px solid #82DCFE;
    border-radius: 50%;
    margin-right: 1.25rem;
    // text-align: center;
  }
  .my-avatar-img {
    position: relative;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    max-width: 80%;
    object-fit: contain;
  }
  .my-login-btn {
    background: $bk;
    border: none;
    border-radius: 0.3125rem;
    padding: 0.625rem;
    color: #333;
  }
  .my-phone {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  .my-id {
    padding-left: 0.3em;
  }
  .next {
    position: absolute;
    right: 1.25rem;
  }
}

.my-tab-c {
  position: relative;
  top: -1rem;
  border-top-left-radius: 1.125rem;
  border-top-right-radius: 1.125rem;
  padding: 1.25rem;
  // margin-bottom: 1.25rem;
  background: $bk;
}
.my-menu {
  padding: 0 1.5rem;
  background: $bk;
}
.my-menu-item {
  padding: 1.125rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F2F2F2;
  .menu-last {
    border-bottom: none;
  }
}
</style>
