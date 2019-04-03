import Vue from 'vue'

const component = {
  template: `
    <div>
      <input type="text" @input="handleInput"/>
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    value: '123'
  },
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `
})