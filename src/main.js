// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  './style/usage/app.scss'
import './components/modules/trans' // 旋转
import '../node_modules/swiper/dist/css/swiper.min.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './vuex/store.js'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
