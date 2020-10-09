import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

//Fonts
import "@/assets/fonts/fonts.css"

//Icons
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

//Dev Express
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

//Custom CSS
import "@/assets/css/main.css"
import '@/assets/scss/main.scss'

//Lodash
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
Vue.use(VueLodash, { lodash: lodash })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
