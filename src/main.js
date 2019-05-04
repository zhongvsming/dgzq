import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import { Carousel, CarouselItem } from 'element-ui';
import router from './router'
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
