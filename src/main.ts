import Vue from 'vue';
import App from './components/App/App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import createStore from '@/store';

Vue.config.productionTip = false

const store = createStore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
