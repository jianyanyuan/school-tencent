<!--
 * @Author: zfd
 * @Date: 2020-11-16 14:31:50
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-17 13:44:00
 * @Description:
-->
<template>
  <div class="idcard-container">
    <!-- <uploader v-model="fileList" multiple /> -->
    <!-- :before-read="beforeRead" :after-read="afterRead" :before-delete="deleteUpload" -->
    <div class="idcard-basic">
      <p>身份证号</p>
      <input type="text" placeholder="请输入身份证号码">
    </div>
    <uploader v-model="fileList" class="idcard-upload" :before-read="beforeRead" :after-read="afterRead" upload-icon="plus">
      <template #preview-cover="{ file }">
        <div class="preview-cover van-ellipsis">{{ file.name }}</div>
      </template>
    </uploader>
  </div>

</template>

<script>
import { Uploader } from 'vant'

export default {
  name: 'ChangeIdcard',
  components: {
    Uploader
  },
  data() {
    return {
      fileList: []
      // { url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: 'leaf' },
      // // Uploader 根据文件后缀来判断是否为图片文件
      // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      // { url: 'https://cloud-image', name: 'cloud', isImage: true }]
    }
  },
  methods: {
    // 返回 Promise
    async beforeRead(file, detail) {
      return new Promise((resolve, reject) => {
        if (!file.type.includes('image')) {
          this.$toast.fail({ message: '请上传照片格式', duration: 2000 })
          reject()
        } else {
          resolve(file)
        }
      })
    },
    afterRead(file, detail) {
      if (file.file.size > 1024 * 1024 * 2) {
        this.$toast.fail({ message: '照片大小应小于2M', duration: 2000 })
        this.fileList.pop()
      }
    },
    deleteUpload(file, detail) {
      console.log('delete')

      console.log(file)
      console.log(detail)
    }
  }
}
</script>

<style lang="scss" scoped>
.idcard-container {
  padding: 20px 20px;
  .idcard-basic {
          color: #8B8B8B;
          p{
            text-indent: 5px;
            letter-spacing: 2px;
          }
          input {
            color: #333;
            width: 100%;
            border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: 0.1);
            // border-bottom: 1px solid #e5e5e5;
            line-height: 40px;
            padding-left: 10px;
          }
  }
  ::v-deep .van-uploader__wrapper {
    margin-top: 30px;
    flex-direction: column;
    .van-uploader__preview-image,.van-uploader__upload {
      width: 130px;
      height: 130px;
          background: #fff;
          margin-bottom: 15px;
    }
    .van-uploader__upload-icon{
      font-size: 60px;
    }
  }
  // ::v-deep .van-uploader__upload {
  // }
}
.preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
</style>
