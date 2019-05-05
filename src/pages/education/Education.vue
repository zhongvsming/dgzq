<template>
  <div id="education">
    <MyTitle></MyTitle>
    <Foot></Foot>
  </div>
</template>

<script>

import Foot from '../../components/Foot.vue'
import MyTitle from './components/MyTitle.vue'

export default {
  name: 'education',
  components: {
    Foot,MyTitle
  }
}
</script>

<style>
#education {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
