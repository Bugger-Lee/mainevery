import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div 
      :id="aaa" 
      @click="handleClick" 
      :class="[isActive ? 'active': '']"
      :style="[styles]"
    >
      {{isActive ? 'active' : 'not active'}}
      {{arr.join(' ')}}
      {{Date.now()}}
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<div>123</div>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    }
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive
    }
  }
})