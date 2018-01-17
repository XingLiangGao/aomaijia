<template>
    <div class="app-message">
         <div class="bacic-message bacic-message">
                    <ul>
                          <li @click="type.value=1"><a href="javascript:;">基本信息</a></li>
                          <li @click="type.value=2"><a href="javascript:;">图文样式</a></li>
                          <li @click="type.value=3"><a href="javascript:;">商品评价</a></li> 
                   </ul>
        </div>
        <AppDetails v-if="type.value==1"></AppDetails>
        <ImageText  v-if="type.value==2"></ImageText>
        <AppEvaluate  v-if="type.value==3"></AppEvaluate>
    </div>
</template>
<script>
import AppDetails from '../app-details.vue'
import ImageText  from '../imagetext/image-text.vue'
import AppEvaluate from '../evaluate/app-evaluate.vue'
export default {
     name:'app-message',
      data:function(){
           return{
              
         }   
    },
    props:['type'],
    components:{AppDetails,ImageText,AppEvaluate},
    methods:{
      
       
        
    }
}
</script>
<style lang="scss" scoped>
         
</style>
