import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p> Name: {{Name}}</p>
      <p> GetName: {{GetName()}}</p>
      <p> Num: {{num}}</p>
      <p> Nums: {{nums}}</p>
      <p>
        <input type='text' v-model='num'/> 
      </p>
      <p>
        <input type='text' v-model='obj.a'/> 
      </p>
    </div>
  `,
  data: {
    firstName: 'Li',
    lastName: 'Jian',
    num: 0,
    nums: 100,
    obj: {
      a: ''
    }
  },
  computed: {
    Name() {
      console.log('new name')
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    num(n, o) {
      console.log(n, o)
      this.nums = this.num
    },
    nums: {
      handler(n, o) {
        console.log(n, o)
        this.num = this.nums
      },
      immediate: true //立即执行
    },
    obj: {
      handler(n, o) {
        console.log(n.a)
        console.log(o.a)
      },
      deep: true //深度监听
    }
  },
  methods: {
    GetName() {
      console.log('new getname')
      return this.firstName + ' ' + this.lastName
    }
  }
})
