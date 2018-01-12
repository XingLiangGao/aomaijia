<template>
    <div class="details-bottom">
          <div class="details-bottom">
			 
            	  <ul>
            	  	   <li>
            	  	   	<i class="yo-ico">&#xe926;</i>
            	  	   	我的
            	  	   </li>
            	  	   <li>
            	  	     <i class="yo-ico">&#xe617;</i>
            	  	      收藏
            	  	   </li>
            	  	   <router-link to="appshopping" tag="li">
            	  	   	 <i class="yo-ico">&#xe501;</i>
            	  	     	购物车
            	  	   </router-link>
            	  </ul>
            	  
            </div>
    </div>
</template>
<script>
import bus from '../../modules/bus'
import {mapActions} from 'vuex'
export default {
  name:'details-bottom',
 data(){
	 return{
		 type:[]
	 }
 },
  methods:{ //点击购物车像后台传参
	  ...mapActions(['addGood']),
types(){
				bus.$emit('change-type',this.type)
				console.log(this)
        	}

  },


 }
</script>
<style lang="scss" scoped>
    
</style>