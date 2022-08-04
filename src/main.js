import Vue from 'vue'
import App from './App.vue'
import {DadsigBarras} from "dadsig-graficas"
import 'dadsig-graficas/dist/dadsig-graficas.css'

Vue.config.productionTip = false

Vue.use(DadsigBarras)

new Vue({
  render: h => h(App),
}).$mount('#app')
