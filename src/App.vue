<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MyTitle></MyTitle>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import MyTitle from './components/MyTitle.vue'
import Foot from './components/Foot.vue'

export default {
  name: 'app',
  components: {
    MyTitle,Foot
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
}
</style>
