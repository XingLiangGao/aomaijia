<template lang="html">
	<div class="main app-banner">
			<!--<a href="#">
				<img src="http://img04.aomygod.com/16090a7729e_bc_80dd1ca7dff12c7065087e0acf997736_1242x613.jpeg?imageView/0/w/640/q/85" class="jImg img-error ">
			</a>-->
			   <mt-swipe :auto="0" :showIndicators="false" :speed="100" :continuous="false">
				    <mt-swipe-item v-for="item in items" :key="item.id">
				  		<img :src="item.url" class="img"/>
				  </mt-swipe-item>
				</mt-swipe>
		</div>
</template>
	
<script>
	import axios from 'axios'
	export default{
		name:'app-banner',
	    data(){
	        return {
				  items:[]
				  }
	    },
	   
	    methods:{
          getGoodsList () {
          	let that = this;
            axios.get('/static/swiper.json').then((res) => {
              console.log(res.data.items)
              that.items = res.data.items;
            })
          }
       },
	     mounted () {
          this.getGoodsList()
        }
}   
</script>

<style lang="scss" scoped>
		
        
</style>