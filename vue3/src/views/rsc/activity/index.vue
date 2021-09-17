<!--
 * @Author: lijian
 * @since: 2021-09-17 09:44:42
 * @lastTime: 2021-09-17 13:22:46
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="act-page" :style="{ background: page.bgColor }">
    <component
      :is="temp[i.module]"
      v-for="(i, index) in list"
      :key="index"
      :data="i"
    ></component>
  </div>
</template>

<script lang="ts">
import tempText from './modules/temp-text.vue'
import tempPic from './modules/temp-pic.vue'
import Msg from './modules/list'
import { reactive } from '@vue/reactivity'
export default {
  setup() {
    const { list, page } = Msg
    const temp = reactive({
      'temp-text': 'tempText',
      'temp-pic': 'tempPic'
    })
    if (page.title) {
      document.title = page.title
    }
    return { list, temp, page }
  },
  components: { tempText, tempPic }
}
</script>

<style lang="scss" scoped>
.act-page {
  min-height: 100vh;
}
</style>
