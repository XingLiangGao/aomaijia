<template lang="html">
	<div class="app-position">
		<div class="position-header">
			<!--<div class="position-return">
				<i class="yo-ico">&#xf07d;</i>
			</div>-->
			<router-link to="/" tag="div" class="position-return">
				<i class="yo-ico">&#xf07d;</i>
			</router-link>
			<div class="position-title">
				<h1>地址选择</h1>
			</div>	
		</div>
		<div class="position-section">
			 <position-first></position-first>
			 <position-last></position-last>
		</div>
	</div>
</template>

<script>
	  import PositionFirst from './PositionFirst'
	  import PositionLast from './PositionLast'
				export default {
					  name:'app-position',				     
					  data() {
					    return {
					      
					    }
					  },
					  components: {
            PositionFirst,PositionLast
        	}
		}
</script>

<style lang="scss">
	.app-position{
			height: 100%;
 			width: 100%;
		.position-header{
			width: 100%;
			height: 0.48rem;
			border-bottom: 1px solid #dfdfdf;
			display: flex;
			div{
				justify-content: center;
 				align-items: center;
 				display: flex;
 				&:first-child{
 					width: .4rem;
 				}
 				&:last-child{
 					flex: 1;
 					h1{
 						font-size:.16rem;
 					}
 				}
			}
		}
		.position-section{
			height: 100%;
		}
	}
</style>