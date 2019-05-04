<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Title></Title>
    <Home></Home>
    <Foot></Foot>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Title from './components/Title.vue'
import Foot from './components/Foot.vue'

export default {
  name: 'app',
  components: {
    Home,Title,Foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
