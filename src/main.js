import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import vuetify from '@/plugins/vuetify';
import VueSession from 'vue-session'
import store from '@/store/index.js'

// Session config
let options = {
  persist: true
};
Vue.use(VueSession, options);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  data() {
    return {
      websocket: null
    }
  },
  render: h => h(App)
}).$mount('#app')