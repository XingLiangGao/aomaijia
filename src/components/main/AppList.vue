
<template lang="html">
	<div class="app-list">
		<div class="good-list"  v-for="detail in details">
			<div class="list-header">
				<h1>{{detail.title}}</h1>
			</div>
			<div class="list-center">
				<img :src="detail.url" alt="" />
			</div>
			<div class="list-footer swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<div class="list-img">
							<img :src="detail.url1"/>
						</div>
						<div class="list-detail">
							<h3>{{detail.good1}}</h3>
						</div>
						<div class="list-price">
							{{detail.price1}}
						</div>
					</li>
					<li class="swiper-slide">
						<div class="list-img">
							<img :src="detail.url2"/>
						</div>
						<div class="list-detail">
							<h3>{{detail.good2}}</h3>
						</div>
						<div class="list-price">
							{{detail.price2}}
						</div>
					</li>
					<li class="swiper-slide">
						<div class="list-img">
							<img :src="detail.url3"/>
						</div>
						<div class="list-detail">
							<h3>{{detail.good3}}</h3>
						</div>
						<div class="list-price">
							{{detail.price3}}
						</div>
					</li>
					<li class="swiper-slide">
						<div class="list-img">
							<img :src="detail.url4"/>
						</div>
						<div class="list-detail">
							<h3>{{detail.good4}}</h3>
						</div>
						<div class="list-price">
							{{detail.price4}}
						</div>
					</li>
					<li class="swiper-slide">
						<div class="list-img">
							<img :src="detail.url5"/>
						</div>
						<div class="list-detail">
							<h3>{{detail.good5}}</h3>
						</div>
						<div class="list-price">
							{{detail.price5}}
						</div>
					</li>
					<li class="swiper-slide">
						<div class="list-img">
							<img :src="detail.url6"/>
						</div>
						<div class="list-detail">
							<h3>{{detail.good6}}</h3>
						</div>
						<div class="list-price">
							{{detail.price6}}
						</div>
					</li>
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
				details:[]
			}
		},
		 methods:{
          getGoodsList () {
          	let that = this;
            axios.get('/static/detail.json').then((res) => {
              console.log(res.data.details[0].title)
              that.details = res.data.details;
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