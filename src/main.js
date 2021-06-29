import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'


library.add(faGithub)


Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

