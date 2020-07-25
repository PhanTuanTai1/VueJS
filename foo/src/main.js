import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import HelloWorld from './components/HelloWorld.vue'
import Ecommere from './components/Ecommere.vue'

Vue.config.productionTip = false
const routes = [
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/Ecommere', component: Ecommere }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
