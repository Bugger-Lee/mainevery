<!--
 * @Author: lijian
 * @since: 2022-07-27 17:53:47
 * @lastTime: 2022-07-28 11:31:25
 * @LastAuthor: lijian
 * @message: 
-->
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  list: {
    type: Object,
  },
});
</script>

<template>
  <div v-if="props.list && props.list">
    <li v-for="i in props.list" :key="i.name">
      <div><span></span>{{ i.name }}</div>
      <list-item :list="i.children"></list-item>
    </li>
  </div>
</template>

<style scoped lang="scss">
li {
  list-style: none;
  margin-left: 30px;
  border-left: 1px solid #ccc;
}
li:last-child {
  border-left: none;
  > div {
    > span {
      border-left: 1px solid #ccc;
    }
  }
}
div {
  text-align: left;
}
span {
  display: inline-block;
  width: 20px;
  height: 40px;
  margin-right: 5px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
}
</style>
