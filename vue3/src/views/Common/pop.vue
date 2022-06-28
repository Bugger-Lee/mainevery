<!--
 * @Author: lijian
 * @since: 2022-06-26 16:35:48
 * @lastTime: 2022-06-28 15:46:08
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <teleport to="body">
    <div class="wx-pop">
      <div class="bottom-pop">
        <div class="title">请输入支付密码<span @click="close">+</span></div>
        <div class="input-list">
          <div v-for="i in 6" :key="i" class="li">
            <span v-if="num > i - 1"></span>
          </div>
        </div>
        <div class="input-num">
          <div class="num-boxs">
            <div @click="addNum">1</div>
            <div @click="addNum">2</div>
            <div @click="addNum">3</div>
          </div>
          <div class="num-boxs">
            <div @click="addNum">4</div>
            <div @click="addNum">5</div>
            <div @click="addNum">6</div>
          </div>
          <div class="num-boxs">
            <div @click="addNum">7</div>
            <div @click="addNum">8</div>
            <div @click="addNum">9</div>
          </div>
          <div class="num-boxs">
            <div></div>
            <div @click="addNum">0</div>
            <div @click="delNum">x</div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  emits: ['close'],
  setup(props, content) {
    const num = ref(0)
    const addNum = () => {
      console.log(111, num.value)
      if (num.value < 6) {
        num.value = num.value + 1
        if (num.value === 6) {
          console.log('111')
          content.emit('close', true)
        }
      }
    }
    const delNum = () => {
      console.log(111, num.value)
      if (num.value > 0) {
        num.value = num.value - 1
      }
    }
    const close = () => {
      content.emit('close', false)
    }
    return { num, addNum, delNum, close }
  }
}
</script>
<style lang="scss" scoped>
.wx-pop {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  .bottom-pop {
    width: 100%;
    height: 340px;
    background: rgb(255, 255, 255);
    bottom: 0;
    position: absolute;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    .title {
      font-size: 14px;
      text-align: center;
      padding: 10px;
      span {
        position: absolute;
        left: 15px;
        top: 0;
        font-size: 30px;
        transform: rotate(45deg);
      }
    }
    .input-list {
      padding-top: 20px;
      display: flex;
      justify-content: center;
      > div.li {
        width: 30px;
        height: 30px;
        background: rgb(245, 245, 245);
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          width: 10px;
          height: 10px;
          background: rgb(0, 0, 0);
          display: inline-block;
          border-radius: 5px;
        }
      }
    }
    .input-num {
      // display: flex;
      padding-top: 50px;
      .num-boxs {
        display: flex;
        height: 50px;
        align-items: center;
        border-top: 1px solid rgb(204, 204, 204);
        font-size: 20px;
        > div {
          flex: 1 1 0%;
          text-align: center;
          height: 100%;
          align-items: center;
          display: flex;
          justify-content: center;
          border-right: 1px solid rgb(204, 204, 204);
        }
        > div:nth-child(3) {
          border-right: none;
        }
      }
    }
  }
}
</style>
