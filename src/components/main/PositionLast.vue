<template lang="html">
	<div class="position-last">
		<ul v-for="message in messages">
			<li>{{message.name}}</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return{
				messages:[]
			}
		},
		name:'position-last',
		methods:{
          getGoodsList () {
          	let that = this;
            axios.get('/static/city.json').then((res) => {
              console.log(res.data)
              that.messages = res.data.messages;
            })
          }
       },
	     mounted () {
          this.getGoodsList()
       }
	}
</script>

<style lang="scss" scoped>
	.position-last{
		width: 2.33rem;
		background: #fff;
		float: right;
		overflow: scroll;
		height: auto;
		ul{
			overflow: scroll;
			height: auto;
			li{
				height: .43rem;
				border-bottom: 1px solid #ccc;
				text-align: center;
				line-height: .43rem;
			}
		}
	}
</style>