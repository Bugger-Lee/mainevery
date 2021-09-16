<!--
 * @Author: lijian
 * @since: 2021-09-15 16:46:41
 * @lastTime: 2021-09-16 11:54:42
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="bg">
    <img src="../../assets/msyh/msyh05.png" alt="" />
    <span @click="go"></span>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const go = () => {
      router.push('/msyh5')
    }
    return { go }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  background: #fff;
  position: relative;
  img {
    width: 100%;
  }
  span {
    display: inline-block;
    background: transparent;
    width: 30%;
    height: 15%;
    position: absolute;
    top: 30%;
    left: 15%;
  }
}
</style>
