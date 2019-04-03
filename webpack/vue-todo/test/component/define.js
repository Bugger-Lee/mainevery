import Vue from 'vue'

const component = {
  props: {
    active: Boolean
  },
  template: `
  <div>
    <p>{{text}}</p>
    <p v-if="active">{{text}}</p>
  </div>
  `,
  data() {
    return {
      text: 456
    }
  }
}

Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  template: `<div>
    <comp-one :active="true"></comp-one>
    <comp-one :active="false"></comp-one>
  </div>`
})