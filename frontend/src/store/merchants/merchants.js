import Vue from 'vue'
import Vuex from 'vuex'

import apiRoutes from '@/js/api-routes'

Vue.use(Vuex)

export const Merchants = {
  namespace: true,
  name: 'merchants',
  state: {
		vendorList: [],
		vendorProfile: {},
		vendorOptions: {},
		vendorEmployeeList: [],
		vendorEmployeeProfile: {}
  },
  mutations: {
		SET_VENDOR_LIST(state, payload) {
			state.vendorList = payload
		},
		PUSH_NEW_VENDOR(state, payload) {
			Vue.set(state.vendorList, state.vendorList.length, payload)
		},
		SET_VENDOR_PROFILE(state, payload) {
			Vue.set(state.vendorProfile, payload);
		},
		SET_EMPLOYEE_PROFILE(state, payload) {
			Vue.set(state.vendorEmployeeProfile, payload);
		},
		SET_VENDOR_OPTIONS(state, payload) {
			console.log("SET_VENDOR_OPTIONS payload", payload)
			Vue.set(state.vendorOptions, payload);
			console.log("state.vendorOptions", state.vendorOptions)
		},
		SET_VENDOR_EMPLOYEE_LIST(state, payload) {
			state.vendorEmployeeList = payload
		}
  },
  actions: {
		//OPTIONS
		async OPTIONSVendor({commit, dispatch, rootState}) {
			console.log("OPTIONSVendor")
			return new Promise( async (resolve, reject) => {
				try {
					let endpoint = 'vendors/';
					let type = 'GET Vendor Options';
					let response = await apiRoutes.OPTIONSItem(dispatch, rootState, endpoint, type)
					if(response.status === 200) {
						console.log("OPTIONSVendor response", response);
						commit('SET_VENDOR_OPTIONS', response.data.actions.POST);
						return resolve(response)
					} else {
						return reject(response)
					}
				} catch (error) {
					return reject(response)
				}       
			}).catch(error => {
				return error;
			});
		},
		//POST and CREATE Item
		async POSTVendor({commit, dispatch, rootState}, payload) {
			return new Promise( async (resolve, reject) => {
				try {
					let endpoint = 'vendors/';
					let type = 'Create New Vendor';
					let response = await apiRoutes.POSTItem(dispatch, rootState,payload, endpoint, type)
					console.log('POSTVendor response', response);
					if(response.status === 201) {
						console.log("Successful");
						commit('PUSH_NEW_VENDOR', response.data);
						return resolve(response)
					} else {
						return reject(response)
					}
				} catch (error) {
					return reject(error)
				}       
			}).catch(error => {
				return error;
			});
		},

		//GET LISTS
		async GETVendorList({commit, dispatch, rootState}) {
			return new Promise( async (resolve, reject) => {
				try {
					let endpoint = 'vendors-list/';
					let type = 'Get Vendors List';
					let response = await apiRoutes.GETList(dispatch, rootState, endpoint, type);
					console.log('GETVendorsList response', response);
					commit('SET_VENDOR_LIST', response.data);
					return resolve(response.data)

				} catch(error) {
					console.error('TryCatch Error error.response', error.response)
					return reject(error)
				}
			}).catch(error => {
				console.error('Promise Error error.response', error.response)
				return error;
			});
		},
		//GET Vendor Employees by ID by FILTER
		async GETVendorEmployeeList({commit, dispatch, rootState}, payload) {
			return new Promise( async (resolve, reject) => {
				try {
					let endpoint = 'employees-list/?vendor=';
					let type = 'Get Vendor Employees List';
					let response = await apiRoutes.FILTERListById(dispatch, rootState, payload, endpoint, type);
					console.log('GETVendorEmployeeList response', response);
					commit('SET_VENDOR_EMPLOYEE_LIST', response.data);
					return resolve(response.data)

				} catch(error) {
					console.error('TryCatch Error error.response', error.response)
					return reject(error)
				}
			}).catch(error => {
				console.error('Promise Error error.response', error.response)
				return error;
			});
		},

    // GET Logged In Vendor Profile Profile By Id
    GETVendorProfileById ({ commit, dispatch, rootState }, payload) {
      console.log('GETVendorProfileById')
      return new Promise(async (resolve, reject) => {
        try {
          console.log('GETVendorProfileById payload', payload)
          const endpoint = 'vendors/?id='
          const type = 'Get Vendor Profile'
          const response = await apiRoutes.GETProfileById(dispatch, rootState, payload, endpoint, type)
          if (response.status === 200) {
            console.log('GETVendorProfileById response', response)
            commit('SET_VENDOR_PROFILE', response.data)
            return resolve(response.data)
          } else {
            return reject({ message: response })
          }
        } catch (error) {
          return reject(error)
        }
      }).catch(error => {
        console.log('error', error)
        if (error.response) {
          console.log('error.response', error.response)
          // dispatch('updateNotification', error.response);
          return reject(error)
        }
      })
		},
		// FILTER VendorUser Profile Profile By Id
    FILTEREmpoyeeProfileById ({ commit, dispatch, rootState }, payload) {
      console.log('FILTEREmpoyeeProfileById payload', payload)
      return new Promise(async (resolve, reject) => {
        try {
          const endpoint = 'employees/?user__id='
          const type = 'Get Vendor Employee Profile'
          const response = await apiRoutes.FILTERListById(dispatch, rootState, payload, endpoint, type)
          if (response.status === 200) {
            console.log('FILTEREmpoyeeProfileById response', response)
            commit('SET_EMPLOYEE_PROFILE', response.data[0])
            return resolve(response.data[0])
          } else {
            return reject({ message: response })
          }
        } catch (error) {
          return reject(error)
        }
      }).catch(error => {
        console.log('error', error)
        if (error.response) {
          console.log('error.response', error.response)
          // dispatch('updateNotification', error.response);
          return reject(error)
        }
      })
    }

  },
  getters: {
		GET_VENDOR_LIST(state) {
			return state.vendorList
		},
		GET_VENDOR_OPTIONS(state) {
			return state.vendorOptions
		},
		GET_VENDOR_EMPLOYEES_LIST(state) {
			return state.vendorEmployeeList
		},
		GET_EMPLOYEE_PROFILE(state) {
			return state.vendorEmployeeProfile
		}
  }
}
