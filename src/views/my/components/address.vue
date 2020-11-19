<!--
 * @Author: zfd
 * @Date: 2020-11-16 14:31:50
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-19 09:58:42
 * @Description:
-->
<template>
  <div class="address-container">
    <div class="address-item">
      <p>社保编号</p>
      <input type="text" placeholder="请输入社保编号">
    </div>
    <div class="address-item">
      <p>现家庭地址</p>
      <input type="text" placeholder="请输入现家庭地址">
    </div>
    <div class="address-item">
      <p>就业单位</p>
      <input type="text" placeholder="请输入就业单位">
    </div>
  </div>

</template>

<script>

export default {
  name: 'ChangePhoto',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.address-container {
    padding: 20px 20px;

    .address-item {
          color: #323233;
          p{
            text-indent: 5px;
            letter-spacing: 2px;
          }
          input {
            font-size: 14px;
            color: #323233;
            width: 100%;
            border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
            // border-bottom: 1px solid #e5e5e5;
            line-height: 40px;
            padding-left: 10px;
          }
  }
}

</style>
