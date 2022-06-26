<!--
 * @Author: lijian
 * @since: 2022-06-26 10:13:50
 * @lastTime: 2022-06-26 13:31:51
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="hm-boxs">
    <div class="hm-contont">
      <img src="../../assets/success.png" class="success-img" />
      <div class="pay-tip">支付成功</div>
      <div class="pay-btn">完成</div>
    </div>
  </div>
</template>

<script lang="ts">
import { toRaw } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  name: 'doc',
  setup() {
    const route = toRaw(useRouter()).currentRoute
    const { money } = toRaw(route.value.query)
    return { money }
  }
}
</script>

<style lang="scss" scoped>
.hm-boxs {
  padding: 5px 10px;
  color: #333;
  font-size: 14px;
  padding-top: 120px;
  .pay-btn {
    width: 80%;
    /* height: 40px; */
    font-size: 16px;
    line-height: 40px;
    margin: 0 auto;
    padding: 0;
    display: block;
    background: #31be69;
    margin-top: 40px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
  }
  .success-img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
  }
  .pay-tip {
    text-align: center;
    margin-top: 20px;
    color: #333;
  }
}
</style>
