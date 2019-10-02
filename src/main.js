import 'animate.css/animate.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import vuescroll from 'vue-scroll'
import App from './App.vue'
import './assets/css/thumnailgrid.css'
import routes from './routes'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(vuescroll)
// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
