<template  >
      <div class="app-detailshead">
             <div class="details">
                    <div class="return yo-ico" @click="$router.back(-1)">&#xe604;</div>
                    <p>商品详情</p>
                    <div class="details-right">
                        <span class="yo-ico">&#xe696;</span>
                        
                        <span class="yo-ico">&#xe525;</span>
                    </div>
            </div> 
            <AppMessage :type= "type"/>
                       
        <DetailsBottom/>   
      </div>
</template>
<script>
import DetailsBottom from './detailsBottom/details-bottom'
 import AppMessage from './bacicMessage/bacic-message'
export default {
  name : "app-detailshead",
  data:function(){
        return{
              type:{value:1}    
        } 
  },
  components:{DetailsBottom,AppMessage}
  
  
 
}
</script>

<style>

</style>


