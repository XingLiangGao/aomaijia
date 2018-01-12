<template >
	<transition  enter-active-class='animated fadeInUp'  leave-active-class='animated fadeOutDown'>
		<div v-show='isShow.value' class="back-top" >	
			<i class="fa fa-arrow-circle-o-up"></i>
		</div>
	</transition>
</template>

<script>
	export default {
		name:'back-top',
		props:['isShow'],
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>

.back-top{
	background-color: rgba(0,0,0,0.7);
    width: 48px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    font-size: 30px;
    overflow: hidden;
    cursor: pointer;
    position: fixed;
    right: 15px;bottom: 15px;
}
</style>