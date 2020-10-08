import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
import leftDrawer from "@/components/navigation/left-drawer-component"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
			main: Home,
			left: leftDrawer
		}
  },
  {
		path: "/admin",
		name: "admin",
		meta: { requiresAuth: false },
		components: {
			main: About,
			left: leftDrawer
		}
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
