import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router'

import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource);

Vue.config.productionTip = false

Vue.use(Vuerouter);
import { router }  from './router'

const routes = new Vuerouter({
  mode: 'history',
  router
})


new Vue({
  routes,
 render: h => h(App),
}).$mount('#app')
