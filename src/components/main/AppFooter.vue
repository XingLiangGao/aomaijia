<template>
	<div class="app-footer">
				<ul>
					<router-link to="/" tag="li">
						<i class="yo-ico">&#xe61a;</i>
						<b>首页</b>
					</router-link>
					<router-link to="/Classify" tag="li">
						<i class="yo-ico">&#xe61f;</i>
						<b>分类</b>
					</router-link>
					<router-link to="/Car" tag="li">
						<i class="yo-ico">&#xe62e;</i>
						<b>购物车</b>
					</router-link>
					<router-link to="/My" tag="li">
						<i class="yo-ico">&#xe60f;</i>
						<b>我的</b>
					</router-link>
				</ul>
 	</div>
</template>

<script>
	export default{
		name:'app-footer'
	}
</script>

<style lang="scss" scoped>
	    .app-footer{
	    width: 100%;
        height: 0.5rem;
        position: fixed;
        bottom: 0;
        background: #fff;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            border-top: 1px solid #666;
            padding-top: 0.02rem;
            li{
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items:center;
                i{
                    font-size: 0.18rem;
                    line-break: 0.18rem;
                }
                b{
                    font-size: 0.12rem;
                    font-weight: 100;
                    transform: scale(0.8);
                }
            }
        }
    }
</style>