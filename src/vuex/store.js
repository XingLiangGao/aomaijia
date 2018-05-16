import Vue from 'vue'
import Vuex from 'vuex'
import getPosition from '../modules/getPosition'
Vue.use(Vuex)

const state ={
      car:[],
      num :1,
      anount:0,
      isDis:false,
      collects: [],
      city:'北京'
}
const getters = {
      tarif(state){//税费 
           let tarif=0;
           state.car.forEach(inf=> {
            if(inf.isSelected){  
               tarif+=parseInt(inf.tariff*state.num)
            } 
          });
          return tarif
      },
      money(state){
          let money = 0;
          state.car.forEach(inf=> {
            if(inf.isSelected){
              money+=parseFloat((inf.price1*inf.num)+(inf.tariff*inf.num)) 
            }
         
        });
      return money
      },
      freights(state){//运费
          let freight = 0;
        state.car.forEach(inf=> {
            if((inf.price1*inf.num) >99){
              freight+=parseInt(inf.freight)
            
              }else{
                freight = 0;
            }
          });
           return freight
      },
  
}
const mutations = {
      initCar(state,car){//初始化数据
          state.car = car;
      },
      addGood(state,{id,title,price1,img,tariff,freight}){//获取到parms 数据 
      let isHas = state.car.some(item=>{//判断数据是否存在,因为用的some方法所以只要有一个为true就返回true 还有every方法 全部为true才返回
            if(item.id == id){
              item.num++;
              return true;
            }else{
              return false;
            }
      })
      if(!isHas){//如果不为true 则把id 返回到 state.car
        state.car.push({id,title,price1,tariff,freight,img,num:1,isSelected:true})
      }
      //为了与数据库数据做对应 （这样影响mutation） 如果是真实ajax 请求不用写 ，
      localStorage.car = JSON.stringify(state.car)
      },
      increment(state){//数量加
        state.num++
      },
      decrement(state,{id}){//数量减
          state.num--   
          if(state.num<=0){
            state.num = 1
            } 
      },
      reduceGood(state,{id}){
        let len =  state.car;
        for (let i = 0; i < len.length; i++) {
          if(state.car[i].id==id){ //如果state.car[i].id 等于我传进来的地
               state.car[i].num --
               if(state.car[i].num == 0){//如果state.car.num  等于0 则删除
                  state.car.splice(i,1)
               }
               break;
          }   
        } 
         //为了与数据里的car对应
       localStorage.car = JSON.stringify(state.car)
      },
      removeGood(state,id){
        let len = state.car.length
        for (let i = 0; i < len; i++) {
            if(state.car[i].id==id){
               state.car.splice(i,1)
                break;
            }
        }
        localStorage.car = JSON.stringify(state.car)
      },
      shoppingCar(state){//购物车加
        state.anount++
        console.log(state.anount,123)
      },
      selectedGood(state,val){
        state.car.forEach(item=>item.isSelected = val)  // 遍历要改的值val 让isSelected = val 为true 或false
      },
      getPosition(state,city){
        
        state.city = city
      }
  }
const actions = {
   addGood({commit},parms){
      console.log(parms,666)
     setTimeout(() => {//模拟ajax请求数据
          let result = 'ok'
          if(result == 'ok'){//如果成功则返回 addGood方法 和数据
              commit('addGood',parms) 
          }
      }, 300); 
    },
   // 初始car 时获得car 的方法
   initCar({commit}){
     //向后端获取购物车数据
       setTimeout(()=>{
         //模拟发送akax请求
             let result = JSON.parse(localStorage.car || '[]')
             commit('initCar',result)//让commit 指向 mutations 里initcar 方法而且吧result传过去
           
       },0)
    },
    selectedGood({commit},val){ 
      setTimeout(()=>{  // 模拟发送ajax请求
          let result = 'ok'
          if(result == 'ok'){
              commit('selectedGood',val)
          }
         
      },300)   
  },
  reduceGood({commit},params){
    setTimeout(()=>{  // 模拟发送a jax请求
        let result = 'ok'
        if(result == 'ok'){
            commit('reduceGood',params)
        }
       
    },300)  
   },
  getPosition({commit}){
		console.log(getPosition)
		getPosition((city)=>{
			commit('getPosition',city)
		})
		
	}  
}
const store = new Vuex.Store({ //c创建store
  state,getters,mutations,actions
})
export default store