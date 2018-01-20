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
             <nav>
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
          ...mapActions(['selectedGood'])
    }
}
</script>
<style lang="scss" scoped>

</style>


