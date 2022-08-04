<!--
 * @Author: lijian
 * @since: 2022-07-26 17:12:15
 * @lastTime: 2022-07-29 17:29:13
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div @click="go">{{ msg }}</div>
</template>

<script setup lang="ts">
import {
  ComponentCustomOptions,
  ComponentInternalInstance,
  getCurrentInstance,
} from 'vue';
import { useRouter } from 'vue-router';
import { testRouter } from './modules/test';
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
testRouter(proxy);
const msg = 'hahaha';
const route = useRouter();
const go = () => {
  route.push('/hahaha');
};
</script>
