<!--
 * @Author: zfd
 * @Date: 2020-11-11 09:22:16
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-12 13:20:28
 * @Description:
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
.app-container {
  background: #F7F8FA;
  height: 100%;
}
.tab-page {
  padding-bottom: 12.5rem;
}
</style>
