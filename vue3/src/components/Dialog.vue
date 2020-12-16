<template>
  <div>Dialog示例 文档</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import { ref, h } from 'vue'
export default {
  name: 'dialogs',
  components: { Dialog, Button },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const ok = () => {
      console.log('ok')
      return false
    }
    const cancel = () => {
      console.log('cancel')
    }
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '哈哈哈'),
        content: '你好',
        ok() {
          console.log('I am Ok')
        },
        cancel() {
          console.log('I am cancel')
        }
      })
    }
    return { x, toggle, cancel, ok, showDialog }
  }
}
</script>