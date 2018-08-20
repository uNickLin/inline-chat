import Vue from 'vue'
import Router from 'vue-router'
import Entry from './views/Entry.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'entry',
			component: Entry
		},
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue')
		}
	]
})
