<template>
    <div class="app-shopnav">
         <div class="shoppconent">
            <div class="shopping">
                  <label>
                     <input type="checkbox"/>
                  </label>
                  <!-- id,title,price1,img,tariff -->
                  <!-- <img :src="info.img" :alt="info.id"/>     -->
                 
                   <img :src="info.img" :alt="info.id">
                  <div class="shopRight">
                      <p>{{info.title}}</p>
                      <nav>
                            <span>￥{{info.price1}}</span>
                            <ul>
                                <li class="yo-ico" @click='decrement'>-</li>
                                <li>{{$store.state.num}}</li>
                                <li class="yo-ico" @click='increment'>+</li>  
                            </ul>
                      </nav>
                  </div>
            </div>
        </div> 
    </div>
   
</template>
<script>
import {mapActions,mapMutations} from 'vuex'
export default {
   name:'app-shopnav',
   props:['info'],
   methods:{
        ...mapActions(['addGood']),
        ...mapMutations(['increment','decrement']),
   },
   mounted:{
       
   }

}
</script>
<style lang="scss" scoped>
      
</style>

