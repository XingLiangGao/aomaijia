
<template lang="html">
	<div class="app-list">
		<div class="good-list" >
			<div class="list-header">
				<h1>新年送礼</h1>
			</div>
			<div class="list-center">
				<img src="http://img04.aomygod.com/160f5108479_bc_a0fecac905582279c89c9a3055427450_1242x662.jpeg?imageView/0/w/640/q/85" alt="" />
			</div>
			<div class="list-footer swiper-container" >
				<ul class="swiper-wrapper">
					<router-link tag="li" :to="{name:'detailshead',params:{userId:goodlist.id}}" class="swiper-slide"  v-for="(goodlist,i,index) in goodlists" :key="index">
						<div class="list-img">
							<img :src="goodlist.img"/>
						</div>
						<div class="list-detail">
							<h3>{{goodlist.title}}</h3>
						</div>
						<div class="list-price">
							￥{{goodlist.price1}}
						</div>
					</router-link>
				</ul>
			</div>
			<div class="list-header">
				<h1>时令水果</h1>
			</div>
			<div class="list-center">
				<img src="http://img04.aomygod.com/160f515101d_bc_44cc1a3362d2258f5901668f92856e46_1242x662.jpeg?imageView/0/w/640/q/85" alt="" />
			</div>
			<div class="list-footer swiper-container" >
				<ul class="swiper-wrapper">
					<router-link tag="li" :to="{name:'detailshead',params:{userId:goodlist.id}}" class="swiper-slide"  v-for="(goodlist,i,index) in goodlists" :key="index">
						<div class="list-img">
							<img :src="goodlist.img"/>
						</div>
						<div class="list-detail">
							<h3>{{goodlist.title}}</h3>
						</div>
						<div class="list-price">
							￥{{goodlist.price1}}
						</div>
					</router-link>
				</ul>
			</div>
			<div class="list-header">
				<h1>糖果巧克力王国</h1>
			</div>
			<div class="list-center">
				<img src="http://img04.aomygod.com/160f517f475_bc_b8f5a4c5e3a88762f7b8d167a8671aea_1242x662.jpeg?imageView/0/w/640/q/85" alt="" />
			</div>
			<div class="list-footer swiper-container" >
				<ul class="swiper-wrapper">
					<router-link tag="li" :to="{name:'detailshead',params:{userId:goodlist.id}}" class="swiper-slide"  v-for="(goodlist,i,index) in goodlists" :key="index">
						<div class="list-img">
							<img :src="goodlist.img"/>
						</div>
						<div class="list-detail">
							<h3>{{goodlist.title}}</h3>
						</div>
						<div class="list-price">
							￥{{goodlist.price1}}
						</div>
					</router-link>
				</ul>
			</div>
		</div>
		
	</div>
</template>
	
<script>
	import Swiper from 'swiper'
	import axios from 'axios'
	export default{
		name:'app-list',
		data(){
			return{
				goodlists:[]
			}
		},
		 methods:{
          getGoodsList () {
          	let that = this;
            axios.get('/src/falseData/false.json').then((res) => {
              console.log(res.data.goodlists[1].id)
              that.goodlists = res.data.goodlists;
            })
          }
       },
	     mounted () {
          this.getGoodsList()
       },
		updated:function(){
			   new Swiper('.swiper-container', {
		      slidesPerView: 3,
		      spaceBetween: 30,
		    });
		}
	}
</script>

<style lang="scss" scoped>
		
</style>