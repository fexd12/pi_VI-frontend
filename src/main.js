// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import App from './components/App.vue'
import routes from './router'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios,axios)
Vue.use(Vuex)

let url = "http://localhost:2000"
Vue.prototype.$baseUrl = url ;
Vue.axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
Vue.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

store.dispatch('get_usuario',`${url}/usuario/token/`);

/* eslint-disable no-new */
// eslint-disable-next-line no-new
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
