// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routerConfig from './router.config';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import AwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(AwesomeSwiper);

const router = new VueRouter(routerConfig, {
  linkActiveClass: 'active'
});

new Vue({
  router: router,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app');

