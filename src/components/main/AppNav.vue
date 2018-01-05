<template lang="html">
	<div class="app-nav">
		<ul>
				<li>
						<div class="i-tools">
							<img src="http://img04.aomygod.com/15d2bbf8bdf_bc_772ecb2c4ab0693ce8aed8e2c2de5dd5_126x126.png?imageslim" alt="">
						</div>
						<span>邀请有礼</span>
				</li>
				<li>
						<div class="i-tools">
							<img src="http://img04.aomygod.com/15d2bbf8bdf_bc_772ecb2c4ab0693ce8aed8e2c2de5dd5_126x126.png?imageslim" alt="">
						</div>
						<span>邀请有礼</span>
				</li>
				<li>
						<div class="i-tools">
							<img src="http://img04.aomygod.com/15d2bbf8bdf_bc_772ecb2c4ab0693ce8aed8e2c2de5dd5_126x126.png?imageslim" alt="">
						</div>
						<span>邀请有礼</span>
				</li>
				<li>
						<div class="i-tools">
							<img src="http://img04.aomygod.com/15d2bbf8bdf_bc_772ecb2c4ab0693ce8aed8e2c2de5dd5_126x126.png?imageslim" alt="">
						</div>
						<span>邀请有礼</span>
				</li>
			</ul>
	</div>
</template>
	
<script>
	export default{
		name:'app-nav'
	}
</script>

<style lang="scss" scoped>
		.app-nav{
            height: 0.915rem;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                li{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                        .i-tools{
                            height: .4rem;
                            width: .4rem;
                            img{
                              width: 100%;
                              height: 100%;
                            }
                        }
                        span{
                            display: block;
                            height: 0.26rem;
                            line-height: 0.26rem;
                            font-size: .14rem;
                            color: #222;
                        }
                }
            }
        }
</style>