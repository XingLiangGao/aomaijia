import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/classify/Classify.vue'
import AppLogin from '../components/mine/AppLogin.vue'
import AppMine from '../components/mine/AppMine.vue'
import AppPersonal from '../components/mine/AppPersonal.vue'
import AppRegister from '../components/mine/AppRegister.vue'
import AppPress from '../components/mine/AppPress.vue'

import AppList from '../components/list/AppList.vue'
import AppListFiltrate from '../components/list/AppListFiltrate.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'',redirect:'/mine'},
    {path: '/classify',name: 'classify',component: Classify},
    {path: '/list',name: 'list',component: AppList},
    {path: '/filtrate',name: 'filtrate',component: AppListFiltrate},
    {path: '/mine',component: AppMine,children:[
      {path:'',redirect:to => {
        if(!localStorage.user_info){
          return {name:'login'}
        }else{
          return {name:'personal'}
        }
      }},      
      {path:'login',name:'login',component:AppLogin},
      {path:'personal',name:'personal',component:AppPersonal},
      {path:'register',name:'register',component:AppRegister},
      {path:'press',name:'press',component:AppPress}
    ]}
  ]
})
