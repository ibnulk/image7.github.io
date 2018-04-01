import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css/animate.min.css'
import './assets/css/thumnailgrid.css'
import vuescroll from 'vue-scroll'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(vuescroll)
// Routing logic
var router = new VueRouter({
	routes: routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
