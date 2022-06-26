<!--
 * @Author: lijian
 * @since: 2022-06-26 10:13:50
 * @lastTime: 2022-06-26 11:07:49
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="hm-boxs">
    <div class="hm-contont">
      <div class="title-center">《惠买网络商城积分说明》</div>
      <div v-for="(i, index) in titles" :key="index">
        <p class="title">{{ i.title }}</p>
        <p class="title-1" v-for="key in i.title1" :key="key">{{ key }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import list from './mock/list'
export default {
  name: 'doc',
  setup() {
    const titles = list.list2
    return { titles }
  }
}
</script>

<style lang="scss" scoped>
.hm-boxs {
  padding: 5px 10px;
  color: #333;
  font-size: 14px;
  .title-center {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    text-align: center;
  }
  .title {
    font-size: 16px;
    padding-bottom: 10px;
    padding-top: 10px;
    color: #333;
  }
  .title-1 {
    font-size: 14px;
    text-indent: 20px;
    line-height: 24px;
    color: #666;
  }
}
</style>
