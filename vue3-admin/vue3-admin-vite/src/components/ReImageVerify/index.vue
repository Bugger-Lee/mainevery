<!--
 * @Author: lijian
 * @since: 2022-08-04 11:59:29
 * @lastTime: 2022-08-05 14:36:42
 * @LastAuthor: lijian
 * @message: 
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const domRef = ref<HTMLCanvasElement>()
const imgCode = ref('')
const getImageCode = () => {
  if (!domRef.value) return
  imgCode.value = draw(domRef.value, 120, 40)
}

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
const randomColor = (min: number, max: number) => {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return `rgb(${r},${g},${b})`
}
const draw = (dom: HTMLCanvasElement, width: number, height: number) => {
  let code = ''
  const NUMBER = '0123456789'
  const ctx = dom.getContext('2d')
  if (!ctx) return code
  ctx.fillStyle = randomColor(180, 230)
  ctx.fillRect(0, 0, width, height)
  const text = NUMBER[randomNum(0, NUMBER.length)]
  const fontSize = randomNum(18, 41)
  console.log(fontSize)
  ctx.font = `${fontSize}px sans-serif`
  ctx.fillStyle = randomColor(50, 120)
  ctx.textBaseline = 'top'
  ctx.fillText(text, 5, 10)
  return code
}
onMounted(() => {
  getImageCode()
})
</script>

<template>
  <canvas
    ref="domRef"
    width="120"
    height="40"
    class="canvas-img"
    @click="getImageCode"
  ></canvas>
</template>

<style scoped>
.canvas-img {
  cursor: pointer;
}
</style>
