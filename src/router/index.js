import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/main/AppMain'
import Classify from '@/components/Classify'
import Car from '@/components/Car'
import My from '@/components/my'
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
  ]
})
