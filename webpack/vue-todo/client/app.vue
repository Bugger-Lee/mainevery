<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <Todo></Todo> -->
    <p>{{count}}</p>
    <p>{{fullName}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a"/> -->
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    Footer,
    Todo
  },
  mounted() {
    let i=0
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 5000);
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName']),
    // fullName () {
    //   return this.$store.getters.fullName
    // },
    // count () {
    //   return this.$store.state.count
    // }
  },
}
</script>

<style lang="less" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #BDFCC9;
  opacity: 0.7;
  z-index: -1;
}
</style>