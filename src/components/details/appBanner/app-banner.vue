<template>
      <!--轮播图-->
        <div class="app-banner xc">
             <div class="bacic-banner swiper-container">
                  <div class="swiper-wrapper">
                        <div  class="swiper-slide" v-for="image in images" :key="image.id">
                              <img :src="image"  :alt="image.id"/>
                        </div>
                          
                        
                  </div>
             </div> 
            
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
            // getImage(){
            //       let that = this
            //       axios.get('/src/falseData/banner.json',{}).then((response)=>{
            //             that.images = response.data.data.billboards
            //             //    console.log( response.data.data.billboards.imageUrl,666)   
            //       })
            // }
           
      },
      updated(){
                  var mySwiper = new Swiper('.bacic-banner',{
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

