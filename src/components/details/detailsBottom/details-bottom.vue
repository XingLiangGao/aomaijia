<template>
    <div class="details-bottom">
          <div class="details-bottom">

            	  <ul>
            	  	   <router-link to="mine" tag="li">
            	  	   	<i class="yo-ico">&#xe926;</i>
            	  	   	我的
            	  	   </router-link>
            	  	   <li @click="shopCollect">
            	  	     <i :class="{'active':isCollect}" class="yo-ico">&#xe617;</i>
            	  	      收藏
            	  	   </li>
            	  	   <router-link to="/appshopping" tag="li">
            	  	   	 <i class="yo-ico">&#xe501;</i>
            	  	     	购物车
					     <span :class="{'zxc':$store.state.isDis}">{{$store.state.num}}</span>
            	  	   </router-link>
            	  </ul>

            </div>
    </div>
</template>
<script>
import bus from '../../modules/bus'
import {mapActions,mapMutations} from 'vuex'
export default {
  name:'details-bottom',
  props: ["eleId"],
 data(){
	 return{
		 type:[],
         isCollect: false
	 }
 },
  methods:{ //点击购物车像后台传参
	  ...mapActions(['addGood']),
		types(){
			bus.$emit('change-type',this.type)
			//console.log(this)
		},
        shopCollect() {
            this.isCollect = !this.isCollect
            if(this.isCollect) {
                this.$store.state.collects.push(this.eleId)
            }else{
                this.$store.state.collects.forEach((item,index) => {
                    if(item === this.eleId){
                        //console.log(index,111)
                        this.$store.state.collects.splice(index,1)
                    }
                    
                })
            }
            console.log(this.$store.state.collects)
            //console.log(this.isCollect)
        }
    }
 }
</script>
<style lang="scss" scoped>
.details-bottom{
    .active{
        color: #F03468;
    }
}
</style>