<!--
 * @Author: lijian
 * @since: 2021-09-17 09:49:25
 * @lastTime: 2021-09-17 13:45:44
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div :style="style" @click="goNext">{{ name }}</div>
</template>
<script lang="ts">
export default {
  props: {
    data: Object
  },
  setup(props) {
    let { style, name, openUrl, url } = props.data
    style = {
      ...style,
      ...{
        lineHeight: style.lineHeight + 'px',
        letterSpacing: style.letterSpacing + 'px',
        fontWeight: style.fontWeight ? 'bold' : '',
        fontStyle: style.fontStyle ? 'oblique' : '',
        padding: '6px 10px',
        textDecoration:
          style.textDecoration && style.delDecoration
            ? 'underline line-through'
            : style.textDecoration
            ? 'underline'
            : style.delDecoration
            ? 'line-through'
            : ''
      }
    }
    const goNext = () => {
      if (!openUrl || !url) return
      window.location.href = url
    }
    return { style, name, openUrl, url, goNext }
  }
}
</script>
