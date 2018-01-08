import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/main/AppMain'
import Classify from '@/components/classify/Classify'
import Car from '@/components/Car'
import My from '@/components/My'
import AppSearch from '@/components/main/AppSearch'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppMain',
      component: AppMain
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
     {
      path: '/Car',
      name: 'car',
      component: Car
    }, {
      path: '/My',
      name: 'my',
      component: My
    },
    {path:'/AppSearch',
    name:'search',
    component:AppSearch}
  ]
})
