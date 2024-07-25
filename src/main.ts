// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import Vue from 'vue';
import App from './App.vue';
import MirinaeDesignSystem from '@cloudforet-test/mirinae';

import '@cloudforet-test/mirinae/css/style.css';
import '@cloudforet-test/mirinae/dist/style.css';

import './style.css';

// import { router } from './router/guard';

Vue.config.productionTip = false;
Vue.use(MirinaeDesignSystem);

new Vue({
  el: '#app',
  components: {
    App,
  },
  template: '<App/>',
});
