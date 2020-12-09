import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import store from '@/store/'

import Home from '../views/Home'
import Login from '../views/login-view'
import PermissionDenied from '../views/permission-denied'
import Reset from '../views/password-reset'
import leftDrawer from '@/components/navigation/left-drawer-component'

// Superuser pages
import superUserDashboard from '@/pages/superuser-portal/dashboard'


// Merchant pages
import merchantDashboard from '@/pages/merchant-portal/dashboard'



Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
			name: 'Home',
			meta: { requiresAuth: true },
			component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
		},
		{
      path: '/password-reset',
      name: 'Password Reset',
      component: Reset
		},
		{
      path: '/denied',
      name: 'Permission Denied',
      component: PermissionDenied
    },
    {
      path: '/secured',
      name: 'Secured',
			component: Login,
			beforeEnter: (to, from, next) => {
				console.log("from", from)
				console.log("to", to)
				console.log("store.getters.GET_USER_PROFILE", store.getters.GET_USER_PROFILE)
				
				if (from.name === 'Login' && store.getters.GET_USER_PROFILE.is_superuser) next({ name: 'Superuser', replace: true })
				else if(from.name === 'Login' && store.getters.GET_USER_PROFILE.is_admin) next({ name: 'Admin', replace: true })
				else if(from.name === 'Login' && store.getters.GET_USER_PROFILE.is_teacher) next({ name: 'Teacher', replace: true })
				else if(from.name === 'Login' && store.getters.GET_USER_PROFILE.is_parent) next({ name: 'Parent', replace: true })
				else if(from.name === 'Login' && store.getters.GET_USER_PROFILE.is_student) next({ name: 'Student', replace: true })
				else if(from.name === 'Login' && store.getters.GET_USER_PROFILE.is_vendor) next({ name: 'Vendor', replace: true })
				else if(from.name === null) next({ name: 'Home', replace: true })
				else	next({name:to.query, replace: true})
			}
		},
    // Superuser Pages
    {
      path: '/superuser',
      name: 'Superuser',
			meta: { requiresAuth: true,
				checkPermissions: false },
      components: {
        main: superUserDashboard,
        left: leftDrawer
      }
		},
	
    // Merchant Pages
    {
      path: '/merchant',
      name: 'Merchant',
      meta: { requiresAuth: true,
				checkPermissions: false },
      components: {
        main: merchantDashboard,
        left: leftDrawer
      }
    },

  ]
})
