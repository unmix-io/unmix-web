import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import IconLibrary from './icon-library'
import VueResource from 'vue-resource'
import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'
import VueSlideBar from 'vue-slide-bar'
 

Vue.use(VueProgress, {
  defaultShape: 'circle',
})

Vue.use(VueResource);
Vue.use(BootstrapVue)
Vue.component('VueSlideBar', VueSlideBar)

Vue.config.productionTip = false


import store from './store/store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
