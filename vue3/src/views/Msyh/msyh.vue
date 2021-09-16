<template>
  <div class="bg">
    <img src="../../assets/msyh/msyh01.png" alt="" />
    <div class="submit" @click="go">立即申请</div>
    <span @click="goTo"></span>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
export default {
  setup() {
    const route = useRouter()
    const router =
      'https://creditcard.cmbc.com.cn/wsv2/index?tpenstr=TuiUhRt98gIHXqNv+5e8dZY0IVaU8ga6nz2OzIOuwkedQWNoKIPMQiblfgdUxuCpI03wheFtDGhImVnwUs9NZYBxWpQbimWwS6x7tAqoSDCS3jE2cmaEoNGAlu0wTr9eCyJNROLTGpWKwAM8CCHFnIItCHf4y994nd0z+nzmcFyFk6XxK+78Q9Yxs8rpXuvCcYmGssHn5hJg4A4G1NYw5mnUo/7AcGg23oss90M7se9V4YEYmpfZoAZsWlUfJvZPQfaFyCLmZF95esrRBV3f3wHVOWOm3T68JWmQWawo0ups98xsCvYyeKX3DsHhn1zRTk/NYfSXXrvh6LbNdCufAw=='
    const go = () => {
      window.location.href = router
    }
    const goTo = () => {
      route.push('/msyh1')
    }
    return { go, goTo }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  img {
    width: 100%;
  }
  .submit {
    margin: 10px auto 20px;
    background: rgb(102, 102, 102);
    color: cornsilk;
    width: 90vw;
    text-align: center;
    padding: 10px;
    border-radius: 2px;
  }
  span {
    display: inline-block;
    background: transparent;
    width: 30%;
    height: 15%;
    position: absolute;
    top: 25%;
    right: 0;
  }
}
</style>
