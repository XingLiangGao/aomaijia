<template lang="html">
	<div class="app-header">
			<div class="city">
				北京<i class="yo-ico">&#xf031;</i>
			</div>
			<div class="title">
				<a href="#">奥买家</a>
			</div>
			<!--<div class="search">
				<i class="yo-ico">&#xf067;</i>
			</div>-->
			<router-link to="/AppSearch" tag="div" class="search">
				<i class="yo-ico">&#xf067;</i></b>
			</router-link>
		</div>
</template>
	
<script>
	export default{
		name:'app-header'
	}
</script>

<style lang="scss" scoped>
		.app-header{
            height: .48rem;
            display:flex;
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                &:first-child{
                    width: 1rem;
                }
                &:nth-child(2){
                     flex: 1;
                    a{
                        font-size: 28px;
                        color:#333;
                    }
                }
                &:last-child{
                    width: 0.8rem;
                    i{
                        font-size: 0.26rem;
                    }
                }
            }
        }
</style>