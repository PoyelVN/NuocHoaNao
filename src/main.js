import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// copy with v-clipboard:copy="currentWord.context"
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
