<!--
 * @Author: lijian
 * @since: 2022-09-14 17:14:40
 * @lastTime: 2022-09-16 14:49:37
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="top-boxs">
    <div class="header-top">
      <div class="header-center">选座</div>
    </div>
    <div class="tip-msg">
      {{ time }} &nbsp;&nbsp;|&nbsp;&nbsp; {{ code }} &nbsp;&nbsp;|&nbsp;&nbsp;
      {{ place }}
    </div>
    <div class="num-box">
      <div class="nums">
        <div>1 江雪莲</div>
        <div style="padding-right: 20px">{{ selectNums }}</div>
      </div>
      <div class="show-text">新增同行人</div>
    </div>
    <div class="test-boxs">
      <div v-for="i in testList" class="test-item">
        <img :src="i.src" alt="" class="test-item-img" />
        {{ i.name }}
      </div>
    </div>
    <div class="test-A">
      <div v-for="i in enList" class="en-item">
        {{ i }}
      </div>
    </div>
  </div>
  <div class="action">
    <div class="action-boxs" v-for="it in numList">
      <div class="tr-item" v-for="item in it">
        <span v-if="item.type === 'td'" class="span-item">{{ item.text }}</span>
        <span v-if="item.type === 'nums'" @click="changeNums(item)">
          <img :src="SPNG" alt="" v-if="item.value === selectNums" />
          <img :src="APNG" alt="" v-else-if="item.img === '1'" />
          <img :src="CPNG" alt="" v-else-if="item.img === '3'" />
        </span>
        <span v-if="item.type === 'null'"></span>
      </div>
    </div>
  </div>
  <div class="bottom-boxs">
    <div class="bottom-select-boxs">
      <div class="first">
        <img :src="selectFirst" alt="" @click="clickFirst" />
        <div class="first-text">
          允许为您自动值机并办理登机牌，如不选择，则需前往机场值机柜台或东航自助渠道办理。
        </div>
      </div>
      <div class="second">
        <img :src="selectSecond" alt="" @click="clickSecond" />
        <div class="second-text">
          阅读并同意<span>在线选座须知</span>及<span>手机值机相关规定</span>
        </div>
      </div>
    </div>
    <div class="bottom-btn" :class="{ 'can-click': showBtn }" @click="goNext">
      下一步
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, toRaw } from 'vue'
import APNG from '../../assets/dfhk/A.png'
import { BPNG, noSelect, selected } from '../../assets/dfhk/CPNG'
import CPNG from '../../assets/dfhk/B.png'
import SPNG from '../../assets/dfhk/C.png'
import numList from './mock'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const testList = ref([
      {
        src: APNG,
        name: '可选座'
      },
      {
        src: BPNG,
        name: '已选座'
      },
      {
        src: CPNG,
        name: '不可选'
      }
    ])
    const enList = ref(['', 'A', 'C', '', 'D', 'F', 'G', 'H', '', 'J', 'L', ''])
    const selectFirst = ref(noSelect)
    const selectSecond = ref(noSelect)
    const clickFirst = () => {
      if (selectFirst.value === noSelect) {
        selectFirst.value = selected
      } else {
        selectFirst.value = noSelect
      }
    }
    const clickSecond = () => {
      if (selectSecond.value === noSelect) {
        selectSecond.value = selected
      } else {
        selectSecond.value = noSelect
      }
    }
    const route = toRaw(useRouter()).currentRoute
    const goRouter = useRouter()
    const { time, place, num, code } = toRaw(route.value.query)
    const selectNums = ref('')
    if (num) {
      selectNums.value = num
    }

    const showBtn = computed(() => {
      if (
        selectFirst.value === selected &&
        selectSecond.value === selected &&
        selectNums.value
      ) {
        return true
      } else {
        return false
      }
    })
    const changeNums = (item) => {
      if (item.img === '1') {
        selectNums.value = item.value
      }
    }
    const goNext = () => {
      if (!showBtn.value) return
      goRouter.push(
        `/dfhk1?time=${time}&place=${place}&num=${selectNums.value}&code=${code}`
      )
    }
    return {
      testList,
      enList,
      selectFirst,
      selectSecond,
      clickFirst,
      clickSecond,
      showBtn,
      numList,
      APNG,
      CPNG,
      SPNG,
      selectNums,
      changeNums,
      time,
      code,
      place,
      goNext
    }
  }
}
</script>

<style lang="scss" scoped>
.top-boxs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #fff;
  .header-top {
    background: #1a3b64;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    font-size: 16px;
  }
  .tip-msg {
    padding: 10px 20px;
    font-size: 12px;
    color: #333;
    border-bottom: 1px solid #eee;
  }
  .num-box {
    .nums {
      display: flex;
      border: 1px solid #92acc8;
      margin: 10px;
      padding: 10px 40px;
      background: #f5faff;
      color: #0d4371;
      border-radius: 2px;
      height: 40px;
      justify-content: space-between;
      align-items: center;
    }
    .show-text {
      color: #0d4371;
      text-align: center;
      font-size: 14px;
      padding-bottom: 10px;
    }
  }
  .test-boxs {
    display: flex;
    justify-content: space-around;
    padding: 0 60px;
    padding-top: 10px;
    background: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    width: 100%;
    height: 40px;
    .test-item {
      display: flex;
      font-size: 12px;
      img.test-item-img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
    }
  }
  .test-A {
    display: flex;
  }
  .en-item {
    flex: 1;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: #999;
  }
}
.action {
  // height: 100vh;
  width: 100%;
  background: #f5f5f5;
  padding-top: 250px;
  margin-bottom: 140px;
  .action-boxs {
    display: flex;
    justify-content: space-around;
    .tr-item {
      display: flex;
      span {
        flex: 1;
        width: 30px;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .span-item {
        font-size: 12px;
        color: #999;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.bottom-boxs {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
  z-index: 1;
  .bottom-select-boxs {
    padding: 10px 20px;
    .first {
      display: flex;
      img {
        width: 16px;
        height: 16px;
      }
      .first-text {
        font-size: 12px;
        color: #333;
        font-weight: 700;
        padding-left: 12px;
      }
    }
    .second {
      display: flex;
      padding-top: 15px;
      img {
        width: 16px;
        height: 16px;
      }
      .second-text {
        font-size: 12px;
        color: #333;
        padding-left: 12px;
        span {
          color: #cb1e36;
          padding: 0 5px;
        }
      }
    }
  }
  .bottom-btn {
    width: 100%;
    font-size: 18px;
    text-align: center;
    padding: 15px;
    background: #cbcbcb;
    color: #fff;
  }
  .can-click {
    background: #cc283e;
  }
}
</style>
