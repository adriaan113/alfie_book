<template>
  <div class="animation-container">
    <div class="panel red">one</div>
    <div class="panel orange">two</div>
    <div class="panel purple">three</div>
    <div class="panel green">four</div>
    <div class="panel gray">five</div>
  </div>
</template>

<script>

import { gsap } from "gsap";



export default {
  data: function () {
    return {
      name: 'satan',
      bool: false
    }
  },
  methods:{
    
    squareMove(){

      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".animation-container",
          pin: true,
          scrub: 1,
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + document.querySelector(".animation-container").offsetWidth
        }
      });
   

    }
  },
  mounted(){
    this.squareMove();
  }
}
</script>


<style scoped>
  .animation-container{
    width: 600%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
  }

  .panel{
    width: 100%;
    height: 100vh;
  }

  .red{
    background-color: red;
  }

  .orange{
    background-color: orange;
  }

  .purple{
    background-color: purple;
  }

  .green{
    background-color: green;
  }

.gray{
  background-color: gray;
  }

</style>
