<!--
 * @Author: zfd
 * @Date: 2020-11-13 14:57:31
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-13 16:40:31
 * @Description:
-->
<template>
  <div class="my-wrapper">
    <nav-bar :fixed="true" :z-index="8" left-arrow class="my-navbar" @click-left="onClickLeft">
      <van-icon slot="left" name="arrow-left" color="#333" size="30px" />
      <span slot="title" class="my-title">{{ currentMenu }}</span>
    </nav-bar>

    <section class="my-main">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </section>
  </div>
</template>

<script>
import { NavBar } from 'vant'

export default {
  name: 'Layout',
  components: {
    NavBar
  },
  filters: {
  },

  data() {
    return {
      currentMenu: '修改手机号'
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
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-wrapper {
  min-height: 100%;
  .my-navbar{
    height: 50px;
    overflow: hidden;
  }
  .my-title {
    color: #333;
    font-weight: bold;
  }
  .my-main {
    // min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 50px
  }
}
</style>
