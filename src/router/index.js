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

import AppDetailshead from '../components/details/app-detailshead'//详情集合
import AppDetails from '../components/details/app-details.vue' // 详情
import ImageText from '../components/details/imagetext/image-text.vue'//图片详情
import AppEvaluate from '../components/details/evaluate/app-evaluate.vue'
import AppShopping from '../components/shoppingCar/app-shopping.vue'//购物车


Vue.use(Router)
export default new Router({
  routes: [
    {path:'',redirect:'/mine'},
    {path: '/classify',name: 'classify',component: Classify},
    {path:'/detail',name:'detail',component:AppDetails},
    {path:'/imagetext',name:'imagetext',component:ImageText},
    {path:'/appevaluate',name:'appevaluate',component:AppEvaluate},
    {path:'/appshopping',name:'appshopping',component:AppShopping},
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
