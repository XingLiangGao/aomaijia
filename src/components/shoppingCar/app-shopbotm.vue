<template>
  <div class="app-shopbotm">
         <div class="acount">
             <i>
                 <input v-model="isAllSelected" type="checkbox"/>
                 全选
             </i>
             <div class="add">
                  <p>
                      合计：<span>￥{{money}}</span>
                  </p> 
                  <p>
                      (运费：<span>{{freights}}</span> ,税费 <span>{{tarif}}</span>)
                  </p>
             </div>
             <nav @click="toResult">
                  结算 (<span>{{$store.state.car.length}}</span>) 
             </nav>
        </div>   
           
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
   name:'app-shopbotm',
   props:['inf'],
   computed:{
       ...mapGetters(['money','tarif','freights']),
       isAllSelected:{
                    get(){// 得到
                        return this.$store.state.car.every(item=>{
                    if(item.isSelected){
                        return true
                    }else{
                        return false
                    }
                })
            },    
            set(newValue){
                this.selectedGood(newValue)
                console.log(newValue)
            }
       }
    },
   methods:{
          ...mapActions(['selectedGood']),

          toResult() {
            var storage = window.localStorage.date;
            if(storage){
                alert('结算成功');
            } else {
                alert('请先登录再结算');
            }
          }
    }
}
</script>
<style lang="scss" scoped>

</style>


