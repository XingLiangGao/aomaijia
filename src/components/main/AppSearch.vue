<template lang="html">
	<div class="app-search">
		<div class="search-header">
			<!--<div class="search-delete">
				<i class="yo-ico">&#xe532;</i>
			</div>		-->
			<router-link to="/" tag="div" class="search-delete">
				<i class="yo-ico">&#xe532;</i>
			</router-link>
			<div class="search">
				<div class="">
			        <i class="yo-ico">&#xf067;</i>
			        <input type="text" name="" value="" placeholder="购全球，上奥买家">
			        <i class="yo-ico">&#xe614;</i>
		        </div>
	      </div>
	      <div class="search-word">
	      		<i>搜索</i>
	      </div>
		</div>
	</div>
</template>
	
<script>
	export default{
		name:'app-search'
	}
</script>

<style lang="scss" scoped>
		.app-search{
			height: 800px;
 			width: 100%;
 			.search-header{
 				height: .47rem;
 				border-bottom: 1px solid #666;
 				display:flex; 
 				div{
 					justify-content: center;
 					align-items: center;
 					display: flex;
	 				&:first-child{
	 					width: .4rem;
	 					font-size: .2rem;
	 				}
	 				&:nth-child(2){
	 					overflow: hidden;
	 					flex: 1;
	 					>div{
	 						height: .33rem;
	 						width: 100%;
	 						background: #f1f1f1;
	 						border: 1px solid #ccc;
	 						input {
				              background: transparent;
				              border: 0;
				              width: 2.7rem;
				            }
				            i{
				            	&:first-child{
				            		color: #a9a9a9;
				            		padding: .1rem;
				            	}
				            	&:last-child{
				            		color: #bbb;
				            	}
				            }
	 					}
	 				}
	 				&:last-child{
	 					width: .32rem;
	 					font-size: .14rem;
	 					margin:0 .1rem 0 .1rem;
	 				}
	 			}
 			}
		}
</style>