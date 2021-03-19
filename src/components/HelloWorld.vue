<template>
  <div class="animation-container">
    <img :src="img.bg" class="panel red">
    <img :src="img.bg" class="panel orange">
    <div class="sq">dit is een hond</div>
    <img :src="img.bg" class="panel purple">
    <img :src="img.bg" class="panel green">
    <img :src="img.bg" class="panel gray">
    
  </div>
</template>

<script>

import { gsap } from "gsap";

export default {
  data: function () {
    return {
      name: 'satan',
      bool: false,
      img:{
        bg: require('../assets/img/bg.jpeg'),
      }
    }
  },
  methods:{
    
    backgroundMove(){
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".animation-container",
          pin: true,
          scrub: 1,
          end: () => "+=" + document.querySelector(".animation-container").offsetWidth
        }
      });
    },
    squareMove(){
      gsap.to('.sq', {
        scrollTrigger: {
          trigger: ".orange",
          toggleActions: "play pause resume reset",
          start:"top top",
          end:"bottom top",
          scrub: 1,
          markers: true,

        },
        x: 400,
        rotation: 360,
        duration: 3
      });
    }
  },
  mounted(){
    this.backgroundMove();
    this.squareMove();
  }
}
</script>


<style  lang="scss" scoped>
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

  .sq{
    width: 100px;
    height: 100px;
    background-color: pink;
    position: absolute;
    z-index: 2;
  }

  /* .red{
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
  } */

</style>
