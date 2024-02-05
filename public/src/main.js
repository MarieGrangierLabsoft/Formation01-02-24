import Vue from 'vue';
import App from './App.vue';
import store from './store'
import router from './router'
import axios from 'axios';
import vuetify from './plugins/vuetify'

Vue.prototype.$axios = axios;


new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');