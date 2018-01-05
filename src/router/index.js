import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/classify/Classify.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'',redirect:'/classify'},
    {path: '/classify',name: 'classify',component: Classify},
    {path:'**',redirect:'/classify'}
    
  ]
})
