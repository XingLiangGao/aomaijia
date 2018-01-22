<template>
      <!--轮播图-->
        <div class="app-banner xc">
            <mt-swipe :auto="0" :showIndicators="false" :speed="100" :continuous="false">
				    <mt-swipe-item  v-for="image in images" :key="image.id">
				  		<img :src="image"  :alt="image.id"/>
				  </mt-swipe-item>
				</mt-swipe>
        </div> 
         
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
      name:'app-banner',
      props:['banners'],
      data:function(){
            return{
                  images:[]
            }
      },
      methods:{
           
           
      },
      updated(){
                  new Swiper('.bacic-banner',{
                  slidesPerView:1,
                  loop:true})
                        
      },
      mounted(){
            let that = this
            setTimeout(function(){ 
                  that.images = that.banners.banner 
                   console.log( that.images)
            },1000)
      }
            
     
}
</script>
<style lang="sass" scoped>
   
</style>

