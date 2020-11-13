<!--
 * @Author: zfd
 * @Date: 2020-11-13 14:57:31
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-13 16:40:31
 * @Description:
-->
<template>
  <div class="app-wrapper">
    <nav-bar :fixed="true" :z-index="8" left-arrow class="app-navbar" @click-left="onClickLeft">
      <van-icon slot="left" name="bars" color="#515151" size="30px" />
      <span slot="title">{{ currentMenu }}</span>

      <span slot="right" class="app-school">苏州市建科培训</span>
    </nav-bar>
    <popup v-model="showSideBar" position="left" class="app-sidebar" @close="onClose">
      <van-cell title="选课" icon="search" is-link />
      <van-cell title="我的课程" icon="newspaper-o" is-link />
      <van-cell title="我的订单" icon="orders-o" is-link />
      <van-cell title="我的信息" icon="smile-o" is-link />
    </popup>

    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </section>
  </div>
</template>

<script>
// import { Dialog } from "vant";
import { Popup } from 'vant'
import { NavBar } from 'vant'

export default {
  name: 'Layout',
  components: {
    Popup,
    NavBar
  },
  filters: {
  },

  data() {
    return {
      showSideBar: false,
      currentMenu: '我的信息'
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  mounted() {
    // this.getbuilds();
  },
  created() {
  },
  methods: {
    onClickLeft() {
      this.showSideBar = !this.showSideBar
    },
    onClose() {
      this.showSideBar = false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  min-height: 100%;
  // white-space: nowrap;
  // overflow-y: scroll;
  .app-navbar{
    height: 50px;
    overflow: hidden;
  }
  .app-sidebar .van-cell__title {
    text-align-last: justify;
  }
  .app-main {
    // min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 50px
  }
  .app-school {
    font-size: 14px;
  }
}
</style>
