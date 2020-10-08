import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#026379',
        secondary: '#CA3C072',
        accent: '#06BFEA',
        error: '#F62F2F',
        info: '#2196F3',
        success: '#0B9C11',
        warning: '#F9BC04'
      }
    }
  }
})
