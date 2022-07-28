<!--
 * @Author: lijian
 * @since: 2022-07-26 17:12:15
 * @lastTime: 2022-07-26 17:52:10
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div @click="go">{{ msg }}</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const msg = 'hahaha';
const route = useRouter();
const go = () => {
  route.push('/hahaha');
};
</script>
