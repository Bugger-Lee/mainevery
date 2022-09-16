<!--
 * @Author: lijian
 * @since: 2022-09-14 17:30:09
 * @lastTime: 2022-09-16 15:00:47
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="top-boxs">
    <div class="header-top">
      <div class="header-center">预祝您旅途愉快</div>
      <span @click="goNext"> <img :src="iconPage" alt="" /></span>
    </div>
    <div class="tip">选座成功</div>
    <div class="tip-bottom">可前往<span>我的-订单-选座订单</span>查看</div>
    <div class="msg-box">
      <div>{{ time }} | {{ place }}</div>
      <div class="msg-flex">
        <p>江雪莲</p>
        <p class="msg-flex-right">座位号 {{ num }} <span>免费</span></p>
      </div>
    </div>
  </div>
  <div class="bottom-tips">
    <p class="top-p">温馨提示</p>
    <p class="bottom-p">
      我们将尽量保障您预留的座位。如您同意，我们将在航班开放值机后自动为您办理乘机手续（须符合自动值机的办理条件），但因临时机型变更，您预留的座位可能有所变动，或会影响自动乘机手续办理，敬请您的谅解。
    </p>
  </div>
</template>

<script lang="ts">
import { toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { iconPage } from '../../assets/dfhk/CPNG'

export default {
  setup() {
    const route = toRaw(useRouter()).currentRoute
    const goRouter = useRouter()
    const { time, place, num, code } = route.value.query
    const goNext = () => {
      goRouter.push(`/dfhk?time=${time}&place=${place}&num=${num}&code=${code}`)
    }
    return { time, place, num, iconPage, goNext }
  }
}
</script>

<style lang="scss" scoped>
.top-boxs {
  background: #1a3b64;
  color: #fff;
  .header-top {
    text-align: center;
    padding: 15px 0;
    font-size: 16px;
    position: relative;
    span {
      position: absolute;
      right: 15px;
      top: 15px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .tip {
    font-size: 16px;
    text-align: center;
    padding: 35px;
    padding-bottom: 10px;
  }
  .tip-bottom {
    color: #92acc8;
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid #082f5f;
    padding-bottom: 10px;
    span {
      color: #bfa253;
    }
  }
  .msg-box {
    padding: 10px 20px;
    font-size: 14px;
    .msg-flex {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
      .msg-flex-right {
        span {
          padding-left: 60px;
        }
      }
    }
  }
}
.bottom-tips {
  padding: 10px;
  .top-p {
    font-size: 15px;
    font-weight: 600;
  }
  .bottom-p {
    font-size: 14px;
    color: #333;
    padding-top: 5px;
  }
}
</style>
