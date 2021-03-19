<template>
  <div id="app">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
  return {
  
  }
},

}
</script>

<style lang="scss">

body{
  margin: 0;
}

#app {
  overflow-x: hidden;
} 

</style>
