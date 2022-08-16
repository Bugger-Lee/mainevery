<!--
 * @Author: lijian
 * @since: 2022-08-04 11:59:29
 * @lastTime: 2022-08-16 16:46:49
 * @LastAuthor: lijian
 * @message: 
-->
<script lang="ts">
export default {
  name: 'ReImageVerify'
}
</script>

<script setup lang="ts">
import { watch } from 'vue'
import { onMounted, ref } from 'vue'
import useHooks from './hooks'

const { domRef, imgCode, setImgCode, getImageCode } = useHooks

interface Props {
  code?: string
}

interface Emits {
  (e: 'update:code', code: string): void
}

const props = withDefaults(defineProps<Props>(), {
  code: ''
})

const emits = defineEmits<Emits>()

watch(
  () => props.code,
  newVal => {
    setImgCode(newVal)
  }
)

watch(imgCode, newVal => {
  emits('update:code', newVal)
})

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
