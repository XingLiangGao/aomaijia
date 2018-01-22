<template>
    <div class="app-shopnav">
         <div class="shoppconent">
            <div class="shopping">

                  <label>
                     <input v-model="info.isSelected" type="checkbox"/>
                  </label>
                   <img :src="info.img" :alt="info.id">
                  <div class="shopRight">
                      <p>{{info.title}}</p>
                      <nav>
                            <span>￥{{info.price1}}</span>
                            <span  @click='removeGood(info.id)' class="yo-ico sh">&#xe606;</span>
                            <ul>
                                <li class="yo-ico" @click='reduceGood({id:info.id})'>-</li>
                                <li>{{info.num}}</li>
                                <!-- {{$store.state.num}} -->
                                <li class="yo-ico" @click='addGood({id:info.id})'>+</li>  
                            </ul>
                      </nav>
                  </div>
            </div>
        </div> 
    </div>
   
</template>
<script>
import {mapActions,mapMutations,mapGetters} from 'vuex'
export default {
   name:'app-shopnav',
   props:['info'],
   methods:{
        ...mapActions(['addGood','reduceGood']),
        ...mapMutations(['decrement','increment','shoppingCar','removeGood']),  
     },    
   computed:{   
      
   },
   mounted:{
      
  }
}
</script>
<style lang="scss" scoped>
      
</style>

