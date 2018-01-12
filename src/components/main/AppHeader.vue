<template lang="html">
	<div class="app-header">
			<!--<div class="city">
				北京<i class="yo-ico">&#xf031;</i>
			</div>-->
			<router-link to="/AppPosition" tag="div" class="city">
				北京<i class="yo-ico">&#xf031;</i>
			</router-link>
			<div class="title">
				<a href="#">奥买家</a>
			</div>
			<!--<div class="search">
				<i class="yo-ico">&#xf067;</i>
			</div>-->
			<router-link to="/AppSearch" tag="div" class="search">
				<i class="yo-ico">&#xf067;</i>
			</router-link>
		</div>
</template>
	
<script>
	export default{
		name:'app-header'
	}
</script>

<style lang="scss" scoped>
		
</style>