<!--
 * @Author: lijian
 * @since: 2021-10-08 10:16:21
 * @lastTime: 2021-10-08 10:42:22
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div>
    <button @click="close">关闭</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'close',
  setup() {
    let close = () => {
      console.log('点击关闭1')
      // window.open('', '_self').close()
      console.log('点击关闭2')
    }
    return { close }
  }
}
</script>
