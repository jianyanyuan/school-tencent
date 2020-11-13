<!--
 * @Author: zfd
 * @Date: 2020-11-11 16:29:00
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-13 16:42:31
 * @Description:
-->
<template>
  <div class="app-container">
    <div class="my-avatar" :style="{backgroundImage:avatarUrl}" />

  </div>
</template>

<script>
export default {
  name: 'My',
  components: {

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
.my-avatar {
  height: 120px;
  width: 120px;
  margin: 0 auto;
  border: 4px solid white;
  border-radius: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
