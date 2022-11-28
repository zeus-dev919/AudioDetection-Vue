import Vue from 'vue'
import App from './components/App.vue'

import './index.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
