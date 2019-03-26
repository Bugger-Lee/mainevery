import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate() {
    console.log(this, 'beforeCreate')
  },
  created() {
    console.log(this, 'created')
  },
  beforeMount() {
    console.log(this, 'beforeMount')
  },
  mounted() {
    console.log(this, 'mounted')
  },
  beforeUpdate() {
    console.log(this, 'beforeUpdate')
  },
  updated() {
    console.log(this, 'updated')
  },
  activated() {
    console.log(this, 'activated')
  },
  deactivated() {
    console.log(this, 'deactivated')
  },
  beforeDestroy() {
    console.log(this, 'beforeDestroy')
  },
  destroyed() {
    console.log(this, 'destroyed')
  },
  errorCaptured() {
    console.log(this, 'errorCaptured')
  },
  render(h) {
    console.log(h,'render')
    return h('div', {}, this.text)
  },
  renderError(h, err) {
    return h('div', {}, err.stack)
  },
})

app.$mount('#root')
// setInterval(() => {
//   app.text += 1
// }, 1000);