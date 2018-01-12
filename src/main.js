import Vue from 'vue'
import App from './App'
import router from './router'

//mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './style/usage/app.scss' 
import './components/modules/trans' // 旋转
import '../node_modules/swiper/dist/css/swiper.min.css'
import store from './vuex/store.js'
Vue.config.productionTip = false
//iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//directives
import './modules/directives'

//swiper
import '../node_modules/swiper/dist/css/swiper.min.css'

import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
