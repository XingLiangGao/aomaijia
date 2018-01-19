<template>
	<div class="app-footer">
				<ul>
					<router-link to="/" tag="li">
						<i class="yo-ico">&#xe677;</i>
						<b>首页</b>
					</router-link>
					<router-link to="/classify" tag="li">
						<i class="yo-ico">&#xe6b0;</i>
						<b>分类</b>
					</router-link>
					<router-link to="/appshopping" tag="li">
						<i class="yo-ico">&#xe501;</i>
						<b>购物车</b>
					</router-link>
					<router-link to="/mine" tag="li">
						<i class="yo-ico">&#xe638;</i>
						<b>我的</b>
					</router-link>
				</ul>
 	</div>
</template>

<script>
	export default{
		name:'app-footer',
		
	}
</script>

<style lang="scss" scoped>
</style>