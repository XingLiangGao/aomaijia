import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppDetailshead from '../components/details/app-detailshead'//详情集合
import AppDetails from '../components/details/app-details.vue' // 详情
import ImageText from '../components/details/imagetext/image-text.vue'//图片详情
import AppEvaluate from '../components/details/evaluate/app-evaluate.vue'
import AppShopping from '../components/shoppingCar/app-shopping.vue'//购物车
const routes = [
         {path:'',redirect:'AppDetailshead'},
         {path:'/detail',name:'detail',component:AppDetails},
         {path:'/imagetext',name:'imagetext',component:ImageText},
         {path:'/appevaluate',name:'appevaluate',component:AppEvaluate},
         {path:'/appshopping',name:'appshopping',component:AppShopping},
         {path:'**',redirect:'/AppDetailshead'}
]
const router = new Router({
    routes,
})
export default router