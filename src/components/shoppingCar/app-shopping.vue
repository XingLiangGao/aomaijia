<template>
    <div class="app-shopping">
         <div class="shopp-head">
            <ul>
              <li class="yo-ico">&#xe60e;</li>
              <li>奥买家全球旗舰店</li> 
            </ul>  
         </div>
         <div v-if="!car.length" class="w">
             <div><i class="yo-ico">&#xe631;</i></div>
             <span>空空如也，开来购物吧！！</span>
             <div class="ref">
                  <!-- <router-link :tag="nav" to="regalter">注册</router-link>
                  <router-link :tag="nav" to="logan">登陆</router-link> -->
                <router-link to="regalter" tag="div"> 
                     <nav>注册</nav>
                </router-link> 
                <router-link to="logan" tag="div">
                  <nav>登陆</nav>
                </router-link>    
             </div>
         </div>
        <AppShopnav v-for="item in car " :key="item.id" :info="item"></AppShopnav> 
        <!--循环car 把数据 取出:info="item" -->
        <AppShopbotm v-for = "(item,i) in car " :key="item.i" :inf="item"></AppShopbotm>
          
    </div>
</template>
<script>
import AppShopnav from './app-shopnav.vue'
import AppShopbotm from './app-shopbotm.vue'

import {mapState,mapActions} from 'vuex'
export default {
  name:'app-shopping',
  components:{AppShopnav,AppShopbotm},
  computed:{
      ...mapState(['car'])
  },
  methods:{
      ...mapActions(['initCar'])
  },
  created(){//初始化
     this.initCar()
  }
}
</script>
<style lang="scss" scoped>
   
</style>


