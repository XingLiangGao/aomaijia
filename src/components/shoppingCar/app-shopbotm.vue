<template>
  <div class="app-shopbotm">
         <div class="acount">
             <i>
                 <input type="checkbox"/>
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
                  结算 (<span>1</span>) 
             </nav>
        </div>   
           
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
   name:'app-shopbotm',
   props:['inf'],
   computed:{
       ...mapGetters(['money','tarif','freights'])
   }
}
</script>
<style lang="scss" scoped>

</style>


