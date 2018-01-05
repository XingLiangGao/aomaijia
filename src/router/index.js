import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/classify/Classify.vue'
import AppLogin from '../components/mine/AppLogin.vue'
import AppMine from '../components/mine/AppMine.vue'
import AppPersonal from '../components/mine/AppPersonal.vue'
import AppRegister from '../components/mine/AppRegister.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'',redirect:'/mine'},
    {path: '/classify',name: 'classify',component: Classify},
    {path: '/mine',component: AppMine,children:[
      {path:'',redirect:to => {
        return {name:'personal'}
      }},      
      {path:'login',name:'login',component:AppLogin},
      {path:'personal',name:'personal',component:AppPersonal},
      {path:'register',name:'register',component:AppRegister}
    ]},
    {path:'**',redirect:'/classify'}
    
  ]
})
