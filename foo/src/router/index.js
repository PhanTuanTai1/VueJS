import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Ecommere from '../components/Ecommere.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	},
	{
		path: '/Ecommere',
		name: 'Ecommere',
		component: Ecommere
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
