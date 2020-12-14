<template>
  <div>
    <button @click="toggle"
            class="glablmoon-switch"
            :class="{'glablmoon-checked':value}"> <span></span></button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    value: Boolean
  },
  setup (props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.glablmoon-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  &.glablmoon-checked {
    background: #ff3300;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active{
    > span {width: $h2 + 4px;}
  }
  &.glablmoon-checked:active{
    > span {width: $h2 + 4px; margin-left: -4px;}
  }
}
</style>