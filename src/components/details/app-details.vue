<template>
   <div  class="app-details">      
            <!--轮播图-->
            <app-banner></app-banner>
            <!--商品地址-->
            <app-autotrophy :es="el"></app-autotrophy>
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
    </div>
</template>

<script>
import Swiper from 'swiper'
import AppBanner from './appBanner/app-banner'
import AppAutotrophy from './autotrophy/app-autotrophy'
import AppGlobal from './appglobal/app-global'
import AppSee from './appSee/app-see'
import axios from 'axios'
export default {
     name : "app-details",
           props:['el'],
     data:function(){
            return{
            isShade:false, 
            }
        },
     components:{AppBanner,AppAutotrophy,AppGlobal,AppSee},    
    methods:{
        // getData(){
        //     let that = this;
        //     axios.get('/src/falseData/false.json',{}).then((response)=>{
        //         console.log(response)
        //         that.billboards = response.data.goodlists[0]
        //         console.log(that.billboards.name)
        //     })
        // }
    },
    
   
}

</script>  



<style lang="scss" scoped>

</style>

