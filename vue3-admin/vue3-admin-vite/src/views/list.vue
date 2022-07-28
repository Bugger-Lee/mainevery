<!--
 * @Author: lijian
 * @since: 2022-07-27 17:49:50
 * @lastTime: 2022-07-28 09:36:33
 * @LastAuthor: lijian
 * @message: 
-->
<script setup lang="ts">
import listItem from './modules/list-item.vue';

const list = [
  {
    name: '中国林产业集团有限公司',
    children: [
      {
        name: '应收债款债券融资计划',
        children: [{ name: '发起人' }, { name: '融资人' }],
      },
      {
        name: '交易促进',
        children: [{ name: '基础角色' }],
      },
      {
        name: '供应链债券融资计划',
        children: [{ name: '发起人' }, { name: '融资人' }],
      },
    ],
  },
];
</script>

<template>
  <div>
    <li v-for="i in list" :key="i.name">
      <div>{{ i.name }}</div>
      <list-item :list="i.children"></list-item>
    </li>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
