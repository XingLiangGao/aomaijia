<template>
   <div  class="app-details">
            <AppDetailshead/>
             <AppMessage/> 
            <!--轮播图-->
            <app-banner></app-banner>
            <!--商品地址-->
            <app-autotrophy ></app-autotrophy>
            <!--国家-->
            
            <!--旗舰店-->
            <app-global></app-global>
            <!--看了又看-->
            <app-see></app-see>
            <!--查看商品详情-->
	              <div id="check">
	              	<i></i>
	                 点击查看商品详情
                      
	              	<i></i>
	              </div>
	        <DetailsBottom/>      
	      
           
    </div>
</template>

<script>
import Swiper from 'swiper'
import AppDetailshead from './app-detailshead'
import AppMessage from './bacicMessage/bacic-message'
import AppBanner from './appBanner/app-banner'
import AppAutotrophy from './autotrophy/app-autotrophy'
import AppGlobal from './appglobal/app-global'
import AppSee from './appSee/app-see'
import DetailsBottom from './detailsBottom/details-bottom'
import axios from 'axios'
export default {
   name : "app-details",
 
     data:function(){
        return{
           isShade:false,
        //    billboards:[]   
        }
  },
  methods:{
     getData(){
         let that = this;
         axios.get('/src/falseData/false.json',{}).then((response)=>{
            console.log(response)
              that.billboards = response.data.goodlists[0]
              console.log(that.billboards.name)
         })
     }
  },
  created(){
       	//  this.getData()
       	 
      },
    components:{AppDetailshead,AppBanner,AppAutotrophy,AppGlobal,AppSee,AppMessage,DetailsBottom},
 
     
      
  
}

</script>  



<style lang="scss" scoped>

</style>

