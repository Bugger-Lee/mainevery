<template>
  <div>
    <Switch v-model:value="switchs"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: { 
    Switch
  },
  setup() {
    const switchs = ref(false)
    const change = e => {
      console.log(e)
      switchs.value = e
    }
    return { switchs, change }
  }
}
</script>