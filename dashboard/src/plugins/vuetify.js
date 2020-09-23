import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'

Vue.use(Vuetify)

const theme = {
  primary: '#2564b2',
  secondary: '#C1DBE3',
  success: "#7FD1B9",
  warning: '#F2CD5D',
  info: '#2564b2',
  danger: '#d62839',
}


export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
