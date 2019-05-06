import Vue from 'vue'
import Education from './Education.vue'
import '../../plugins/element.js'
import { Carousel, CarouselItem } from 'element-ui';
import router from './router'
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Education)
}).$mount('#education')
