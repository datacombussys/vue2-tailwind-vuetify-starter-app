import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

// Numeric Input
import VueNumericInput from 'vue-numeric-input'
Vue.use(VueNumericInput)

//Vue-number-input
import VueNumberInput from '@chenfengyuan/vue-number-input';
Vue.use(VueNumberInput);

//Fonts
import "@/assets/fonts/fonts.css"

//Icons
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

//FontAwesome Icons
//<fa-icon :icon="['far', 'address-book']" size="6x"></fa-icon>
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

library.add(fas);
library.add(fab);
library.add(far);

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('fa-layer', FontAwesomeLayers)
Vue.component('fa-layer-text', FontAwesomeLayersText)

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

//Route Guards
require('@/routes/route-guards')

// Vue Moment
Vue.use(require('vue-moment'))
Vue.use(VueLodash, { lodash: lodash })

// Axios
require('@/js/axios')

//Import Vue-Numeral for Number Formatting
import vueNumeralFilterInstaller from 'vue-numeral-filter';
Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' });

//Custom Filters
require("@/js/filters");

//V-Mask
import VueMask from 'v-mask'
Vue.use(VueMask);

//CASL Permissions System
import { abilitiesPlugin } from '@casl/vue';
import ability from './js/permissions-ability';
Vue.use(abilitiesPlugin, ability);
import { Can } from '@casl/vue';
Vue.component('Can', Can);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
