<!--
 * @Author: lijian
 * @since: 2022-06-26 10:13:50
 * @lastTime: 2022-06-26 17:50:09
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="hm-boxs">
    <div class="hm-contont">
      <div class="pay-title">尊敬的用户您好：</div>
      <div class="pay-content">
        当前需要支付的金额：<span>{{ money }}</span
        >元
      </div>
      <img class="pay-img" src="../../assets/logos.png" />
      <div class="pay-btn" @click="close('1')">确认支付</div>
    </div>
    <pop @close="close" v-if="show" />
  </div>
</template>

<script lang="ts">
import { ref, toRaw } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import pop from './pop.vue'
export default {
  name: 'doc',
  components: { pop },
  setup() {
    const route = toRaw(useRouter()).currentRoute
    const { money } = toRaw(route.value.query)
    return { money }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    close(e) {
      if (e === '1') {
        this.show = true
      } else {
        this.show = false
        if (e === true) {
          this.$router.push('/pay-success')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-boxs {
  padding: 5px 10px;
  color: #333;
  font-size: 14px;
  padding-top: 120px;
  .title-center {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    text-align: center;
  }
  .title {
    font-size: 16px;
    padding-bottom: 10px;
    padding-top: 10px;
    color: #333;
  }
  .title-1 {
    font-size: 14px;
    text-indent: 20px;
    line-height: 24px;
    color: #666;
  }
  .pay-title {
    text-align: left;
    margin-left: 40px;
    color: #666;
    font-size: 16px;
  }
  .pay-content {
    text-align: left;
    margin-left: 40px;
    color: #999999;
    span {
      color: #f19f1c;
      display: inline-block;
      font-size: 30px;
    }
  }
  .pay-img {
    width: 100px;
    height: 100px;
    margin: 20px auto 0;
    display: block;
  }
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
}
</style>
