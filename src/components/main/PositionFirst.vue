<template lang="html">
	<div class="position-first">
		<ul>
			<li @click="changeCity(i)" :class="isShow==i?'city-show':''" v-for="(city,i) in citys" :key=i>{{city}}</li>	
		</ul>
	</div>
</template>

<script>
	
	export default {
		data(){
			return{
				citys:["北京","市辖区","请选择"],
				isShow:0
			}
		},
		name:'position-first',
		methods:{
			changeCity(id){
				this.isShow = id;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.position-first{
		width: 1.08rem;
		height: 100%;
		background: #F2F2F2;
		overflow: scroll;
		float: left;
		ul{
			li{
				height: .43rem;
				border-bottom: 1px solid #ccc;
				text-align: center;
				line-height: .43rem;
			}
			.city-show{
				background: #fff;
			}
		}
	}
</style>