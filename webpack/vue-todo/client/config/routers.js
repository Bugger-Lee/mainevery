import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    // props:true,
    path: '/app',
    meta: {
      ifHeader: true
    },
    beforeEnter: (to, from, next) => {
      console.log(' before enter');
      next()      
    },
    component: Todo,
    name: 'app',
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  }
]