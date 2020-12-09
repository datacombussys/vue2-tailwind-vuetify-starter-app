import Vue from 'vue'
import Vuex from 'vuex'

import { Auth } from '@/store/auth/auth'
import { Notifications } from '@/store/notifications/notifications'

import { SuperUsers } from '@/store/superusers/superusers'
import { Merchants } from '@/store/merchants/merchants'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
		Auth,
		Notifications,
		Merchants,
		SuperUsers,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  }
})