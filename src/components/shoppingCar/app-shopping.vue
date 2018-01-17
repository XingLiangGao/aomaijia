<template>
    <div class="app-shopping">
        <div class="details">
           <div class="return yo-ico" @click="$router.back(-1)">&#xe604;</div>
                <p>购物车</p>
                <div class="details-right">
                    <span class="yo-ico">&#xe696;</span>
                  <router-link>      
                    <span class="yo-ico">&#xe525;</span>
                  </router-link>  
                </div>
        </div>
        <div class="shopp">
                <div class="shopp-head"  v-if="car.length">
                    <ul>
                    <li class="yo-ico">&#xe60e;</li>
                    <li>奥买家全球旗舰店</li> 
                    </ul>  
                </div>
                <div v-if="!car.length" class="w">
                    <div><i class="yo-ico">&#xe631;</i></div>
                    <span>空空如也，开来购物吧！！</span>
                    <div class="ref">
                        <router-link to="mine/register" tag="div"> 
                            <nav>注册</nav>
                        </router-link> 
                        <router-link to="mine/login" tag="div">
                        <nav>登陆</nav>
                        </router-link>    
                    </div>
                </div>
                <AppShopnav   v-for = "item in car " :key="item.i" :info="item" ></AppShopnav> 
                <!-- v-for = "item in car " :key="item.i" :info="item"  -->
                <!-- :car="cars" -->
                <!--循环car 把数据 取出:info="item" -->
                <AppShopbotm v-if="car.length" ></AppShopbotm>
        </div>     
          
    </div>
</template>
<script>
import AppShopnav from './app-shopnav.vue'
import AppShopbotm from './app-shopbotm.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name:'app-shopping',
  data(){
      return{
           cars:JSON.parse(localStorage.car)?JSON.parse(localStorage.car):'[]'
           
      }
      
  },
  components:{AppShopnav,AppShopbotm},
  computed:{
      ...mapState(['car'])
      
  },
  methods:{
      ...mapActions(['initCar'])
  },
  created(){//初始化
     this.initCar()
  },


}
</script>
<style lang="scss" scoped>
.shopp{
    width:100%;
    height:7rem;
    background:#eee;
}
.details{
    width:100%;
    height: 0.44rem;
    background:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size: 16px;
    
    .return{
            padding-left:0.1rem;
            display: block;
            width:0.5rem;
            font-size: 20px;
            
    }
    .details-right{
           width: 0.88rem;
           height: 0.44rem;
           display:flex;
           align-items:cyenter;
        span{
             font-size: 20px;
             width:0.44rem;
             height: 0.46rem;
             display: block;
             text-align: center;
             line-height: 0.44rem;
        }
    }
}
</style>


