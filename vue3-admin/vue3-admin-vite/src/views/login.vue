<!--
 * @Author: lijian
 * @since: 2022-07-28 16:33:43
 * @lastTime: 2022-07-28 18:12:52
 * @LastAuthor: lijian
 * @message: 
-->
<script setup lang="ts">
import bg from '@/assets/img/bg.jpg';
</script>

<template>
  <div class="bg"></div>
  <div class="login-boxs">
    <h3>登录</h3>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: #4a93f5;
  background-image: linear-gradient(to right bottom, #662af3, #5e8ae9, #b9b3f1);
}
.login-boxs {
  width: 350px;
  height: 400px;
  background: #fff;
  border-radius: 5px;
  h3 {
    padding-top: 20px;
  }
}
</style>
