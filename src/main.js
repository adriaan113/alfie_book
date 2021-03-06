import Vue from 'vue'
import App from './App.vue'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
