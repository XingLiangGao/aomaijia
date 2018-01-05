import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Classify from '../components/classify/Classify.vue'
=======
import AppMain from '@/components/main/AppMain'
import Classify from '@/components/Classify'
import Car from '@/components/Car'
import My from '@/components/my'
import AppSearch from '@/components/main/AppSearch'
>>>>>>> fj

Vue.use(Router)
export default new Router({
  routes: [
<<<<<<< HEAD
    {path:'',redirect:'/classify'},
    {path: '/classify',name: 'classify',component: Classify},
    {path:'**',redirect:'/classify'}
    
=======
    {
      path: '/',
      name: 'AppMain',
      component: AppMain
    },
     {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
     {
      path: '/Car',
      name: 'Car',
      component: Car
    }, {
      path: '/My',
      name: 'My',
      component: My
    },
    {path:'/AppSearch',
    name:'AppSearch',
    component:AppSearch}
>>>>>>> fj
  ]
})
