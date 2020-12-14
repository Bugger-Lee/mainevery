<template>
  <div>Dialog示例 文档</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x"
          :closeMask="false"
          :ok="ok"
          :cancel="cancel"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
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
    return { x, toggle, cancel, ok }
  }
}
</script>