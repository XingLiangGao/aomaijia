<template>
   <div class="app-autotrophy" >
         
           <div class="price">
                
                    <span> ￥{{billboards.price1}}</span>
                    <i>￥{{billboards.oldprice1}}</i> 
          </div> 
          <div class="autotrophy">
                  <nav>
                      <ul>
                       <li>
                             <span>自营/</span> 
                             {{billboards.title}}
                       </li>
                       </ul>
                  </nav>
                  <div class="elasticity">
                        <p class="xp">
                            {{billboards.introduce}}
                        </p>
                        <i class="yo-ico" v-trans-ition>&#xe625;</i>
                  </div>
                 
            </div>
              <!--运费说明-->
            <div class="freight">
                  <p>运费说明：<span> {{billboards.PostTerms}}</span></p>
            </div>
             <!--七天退货-->
            <div class="keep-up">
                  
                    <ul class="sales-return">
                          <li>
                             <span class="yo-ico">&#xe611;</span>
                             7天退货
                          </li>
                          <li  >
                              <i class="yo-ico" v-trans-ition @click="isShade = !isShade"> &#xe615;</i>
                             
                          </li>
                    </ul>
      
            </div>
             <!--7天弹框-->  
             <div class="popup" v-show="isShade">
             	    <div>
             	    	<ul>
             	    		<li>说明&nbsp;:</li>
             	    		<li  @click="isShade = !isShade" class="yo-ico">&#xe60b;</li>
             	    	</ul>
             	    	<div class="kl">
             	    		 <p>7天退货</p>
             	    		 <p>该商品不支持7天无理由退货</p>
             	    	</div>
             	    </div>
             </div>
             <!---->
              <div id="state">
                  <nav class="state1">{{billboards.state}}</nav>
                 
            </div>
            <div class="guang">
	             <ul>
	                        <li>{{billboards.site}}</li>
	                        <li>关税：<span>￥{{billboards.tariff}}</span></li>
	                        <li class="yo-ico x" v-trans-ition  @click="isShow=!isShow">&#xe615;</li>
	            </ul>
            </div>
            <!--税费-->
            <transition enter-active-class="ani fade-in" leave-active-class="ani fade-out">
                  <div class="expenses" v-show="isShow">
                        <p class="shui">税费</p>
                        <p class="shui">  
                              单个商品税费=购买单价*(增值税率+消费税率)/(1-消费税率)*0.7；<br/>
                              
                              本商品适用的增值税率17%，消费税率0%；<br/>
                              
                              注：不同品类商品的税率不同，且商品总价少于2000元，关税税率按0%计算。
                        </p>
                  </div>
            </transition>  
             <!--数量-->
                     
             <div class="numa">
                  <p class="vb">数量</p>
                <div class="numa1">
                        <ul>
                              <li class="yo-ico" @click='decrement'>&#xe649;</li>
                              <li>{{$store.state.num}}</li>
                              <li class="yo-ico" @click='increment'>&#xe61f;</li>
                        </ul>
                        <nav @click='addGood({id:billboards.id,title:billboards.title,price1:billboards.price1,img:billboards.img,tariff:billboards.tariff,freight:billboards.freight})'>
                              加入购物车
                        </nav>
                </div>    
             </div>
   </div>
</template>
<script>
import {mapActions,mapMutations} from 'vuex'
import bus from '../../modules/bus'
import axios from 'axios'
export default {
  name:'app-autotrophy',
data:function(){
        return{
             isShade:false,
             isShow:false,
             billboards:[]   
        }
  },
  methods:{
         ...mapActions(['addGood']),
         ...mapMutations(['increment','decrement']),
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
       	 this.getData()
       	 
  },
mounted(){
        console.log(this)
       var onOff=false;
      let  arr = document.getElementsByClassName('autotrophy')[0]
	 document.getElementsByClassName('elasticity')[0].onclick = function(){
        if(onOff){     
                         this.style.height="0.66rem";
                          this.style.overflow="hidden";
                        //  console.log(this)
			}else{
                         this.style.height="1.4rem"
                         arr.style.height = '1.4rem'
                         this.style.overflow="hidden";
                         
			}
			onOff=!onOff

       }
       let that = this
        	bus.$on("change-type",(params)=>{
                    params =that.billboards 
                    
        	})
  },
  
}
</script>
<style lang="sass" scoped>
    
</style>

