import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// 在這裡設置API的基本URL
axios.defaults.baseURL = 'http://localhost:8000'

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')




