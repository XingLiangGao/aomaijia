import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
      car:[],
      num :1
}
const getters = {
      
      tarif(state){//税费 
           let tarif=0;
           state.car.forEach(inf=> {
           tarif+=parseInt(inf.tariff*state.num)
            //  console.log(tarif)
          });
         return tarif
     },
        money(state){
          let money = 0;
          state.car.forEach(inf=> {
          money+=parseInt((inf.price1*state.num)+(inf.tariff*state.num))
        
      });
      return money
    },
     freights(state){//运费
           let freight = 0;
           state.car.forEach(inf=> {
             if((inf.price1*inf.num) >99){
              freight+=parseInt(inf.freight)
              //  console.log(tarif)
             }else{
              freight = 0;
             }
           });
          return freight
     }
    
    
}
const mutations = {
     initCar(state,car){//初始化数据
      console.log(car,1111)
        state.car = car;
     },
     addGood(state,{id,title,price1,img,tariff,freight}){//获取到parms 数据 
      let isHas = state.car.some(item=>{//判断数据是否存在,因为用的some方法所以只要有一个为true就返回true 还有every方法 全部为true才返回
            if(item.id == id){
              //  item.num++
              return true;
            }else{
              return false;
            }
            localStorage.car = JSON.stringify(state.car)
      })
      if(!isHas){//如果不为true 则把id 返回到 state.car
        state.car.push({id,title,price1,tariff,img,num:1})
      }
      //为了与数据库数据做对应 （这样影响mutation） 如果是真实ajax 请求不用写 ，
      localStorage.car = JSON.stringify(state.car)
     },
     increment(state){//数量加
      state.num++

     },
     decrement(state){
            state.num--   
        if(state.num<=1){
          state.num = 1
            console.log( state.num)
          } 
      }
    
  }
const actions = {
   addGood({commit},parms){
     setTimeout(() => {//模拟ajax请求数据
          let result = 'ok'
          if(result == 'ok'){//如果成功则返回 addGood方法 和数据
              commit('addGood',parms)
          }
     }, 300);
      console.log(parms)
   },
   // 初始car 时获得car 的方法
   initCar({commit}){//向后端获取购物车数据
       setTimeout(() =>{//模拟发送akax请求
             let result = JSON.parse(localStorage.car || '[]')
             commit('initCar',result)//让commit 指向 mutations 里initcar 方法而且吧result传过去
           
       })
    }   
}
const store = new Vuex.Store({ //c创建store
  state,getters,mutations,actions
})
export default store