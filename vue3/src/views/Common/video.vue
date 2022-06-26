<!--
 * @Author: lijian
 * @since: 2022-06-24 18:00:30
 * @lastTime: 2022-06-26 09:51:37
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="bg">
    <embed :src="path" alt="" />
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'doc',
  setup() {
    const route = toRaw(useRouter()).currentRoute
    const { path, title } = toRaw(route.value.query)
    console.log(path, title)
    if (title) {
      document.title = title
    }
    return { path, title }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  embed {
    width: 100%;
  }
}
</style>
