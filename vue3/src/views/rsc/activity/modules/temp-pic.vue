<!--
 * @Author: lijian
 * @since: 2021-09-17 09:49:38
 * @lastTime: 2021-09-17 11:27:35
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <img :src="img" @click="goNext" />
</template>
<script lang="ts">
export default {
  props: {
    data: Object
  },
  setup(props) {
    const { img, openUrl, url } = props.data
    const goNext = () => {
      if (!openUrl || !url) return
      window.location.href = url
    }
    return { img, openUrl, url, goNext }
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
