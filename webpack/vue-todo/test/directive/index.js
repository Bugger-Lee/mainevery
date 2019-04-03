import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p v-text='text'></p> 
      <p v-pre>{{text}}</p> 
      <p v-once>{{text}}</p> 
      <p v-html='html'></p> 
      <p v-show='true'>v-show</p> 
      <p v-if='active'>v-if</p> 
      <p v-for='i in arr' :key="i">{{i}}</p> 
      <p v-for='(i,k,ins) in obj' :key="i">{{i}}:{{k}}:{{ins}}</p> 
      <input type="text" v-model.number.trim.lazy="text"/>
      <input type="checkbox" v-model="active"/>
      <input type="radio" value="one" v-model="picked"/>
      <input type="radio" value="two" v-model="picked"/>
    </div> 
  `,
  data: {
    text: 0,
    active: false,
    html: '<span>this is html</span>',
    arr: [1, 2, 3],
    picked: '',
    obj: {
      a: '123',
      b: '456',
      c: '789'
    }
  }
})