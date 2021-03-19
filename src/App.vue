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
    img: {
      bg:require('./assets/img/bg.jpeg')
    }  
  }
},

}
</script>

<style>

body{
  margin: 0;
}

#app {
  overflow-x: hidden;
} 

</style>
