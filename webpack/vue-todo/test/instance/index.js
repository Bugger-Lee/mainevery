import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">{{text}}-{{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (n, o) {
  //     console.log(`${n},${o}`);
      
  //   }
  // }
})

app.$mount('#root')

let i=0
setInterval(() => {
  i++
  app.text += 1
  app.$set(app.obj, 'a', i)
  // if (app.obj.a >= 3) {
  //   console.log(app.obj.a)

  //   app.$delete(app.obj, 'a')
  // }
}, 1000);

console.log(app)
console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
console.log(app.$root)
console.log(app.$children)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$refs)
console.log(app.$isServer)
// const useWatch = app.$watch('text', (n, o) => {
//   console.log(`${n},${o}`);
// })
// useWatch()
// app.$on('test', (a) => {
//   app.text = a+1
//   console.log('test emited')
// })
// app.$emit('test', 5)
// app.$forceUpdate()

