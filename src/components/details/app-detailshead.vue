<template  >
      <div class="app-detailshead">
            <div class="details">
                    <div class="return yo-ico" @click="$router.back(-1)">&#xe604;</div>
                    <p>商品详情</p>
                    <div class="details-right">
                        <span class="yo-ico">&#xe696;</span>
                        <!-- <router-link to="AppMain" tag="span" class="yo-ico">&#xe525;</router-link > -->
                        <span class="yo-ico">&#xe525;</span>
                    </div>
            </div>
                
            <!--底部--> 
           
      </div>
</template>s
<script>


export default {
  name : "app-detailshead",
  data:function(){
    
        return{
            billboards:[]    
        } 
  },
 
  
  
 
}
</script>

<style>

</style>


