// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import VueI18n from 'vue-i18n'
import router from './router'
import 'quasar-extras/animate'

// AddressbarColor.set('#a2e3fa')
Vue.config.productionTip = true
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueI18n) // Use I18n

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

// Ready translated locale messages
const messages = {
  en: {
    lang: {
      native: 'English'
    },
    interface: {
      close: 'close'
    },
    site: {
      title: 'KINOÏT',
      subtitle: 'Working together since 1999'
    }
  },
  ja: {
    lang: {
      native: 'Japanese'
    },
    site: {
      title: 'こんにちは',
      subtitle: '世界'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    i18n,
    el: '#q-app',
    router,
    rippleEnabled: true,
    render: h => h(require('./App').default)
  })
})
