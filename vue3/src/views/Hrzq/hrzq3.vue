<!--
 * @Author: lijian
 * @since: 2022-06-26 14:33:28
 * @lastTime: 2022-06-26 15:44:24
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="hr-boxs">
    <header>
      <img src="../../assets/hrzq/logo.png" alt="" />
    </header>
    <img src="../../assets/hrzq/hr_3.jpg" alt="" class="hr-imgs" />
    <div class="hr-content">
      <p class="title-1" v-for="key in title" :key="key">{{ key }}</p>
    </div>
  </div>
</template>

<script>
import list from './mock/list'
export default {
  setup() {
    const title = list.title2
    return { title }
  }
}
</script>

<style lang="scss" scoped>
.hr-boxs {
  header {
    height: 60px;
    width: 100%;
    background: url('../../assets/hrzq/bgs.jpg') no-repeat;
    img {
      width: 135px;
      padding-top: 18px;
      padding-left: 25px;
    }
  }
  .hr-imgs {
    width: 100%;
  }
  .hr-content {
    padding: 0 15px;
    .hr-title {
      padding-left: 43px;
      height: 64px;
      line-height: 64px;
      background: url('../../assets/hrzq/hr_right_bg.png') 0px 11px no-repeat;
      font-size: 18px;
      color: #4c4c4c;
      font-weight: bold;
    }
    .ul-boxs {
      border-bottom: 1px dashed #d2d2d2;
      background: url('../../assets/hrzq/new_jiantou.jpg') 0px 12px no-repeat;
      padding-left: 23px;
      .boxs-li {
        line-height: 30px;
        color: #4c4c4c;
        font-size: 14px;
        display: block;
      }
      span {
        display: inline-block;
        float: right;
      }
    }
    .title-1 {
      font-size: 14px;
      text-indent: 20px;
      line-height: 24px;
      color: #666;
    }
  }
}
</style>
