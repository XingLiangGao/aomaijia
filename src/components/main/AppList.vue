<template lang="html">
	<div class="app-list">
				<div class="list-header">
					<h1>9.9抢小草莓</h1>
				</div>
				<div class="list-center">
					<img src="http://img04.aomygod.com/1609762c805_bc_08cb826240689b7f10eaa075eec2a636_1242x662.jpeg?imageView/0/w/640/q/85" class="jImg" style="display: inline;">
				</div>
				<div class="list-footer">
							<ul>
								<li>
									<div class="list-img">
										<img class="jImg" src="http://img04.aomygod.com/15d794ed24c_2_9c025dbf68b523936638db1866c746c7_719x719.jpeg?imageView/0/w/200" style="display: inline;">	
									</div>
									<div class="list-detail">
										<h3>葡挞妈咪泰国Mistine小草莓变色润唇膏口</h3>
									</div>
									<div class="list-price">
										￥9.90
									</div>
								</li>
								<li>
									<div class="list-img">
										<img class="jImg" src="http://img04.aomygod.com/15d794ed24c_2_9c025dbf68b523936638db1866c746c7_719x719.jpeg?imageView/0/w/200" style="display: inline;">	
									</div>
									<div class="list-detail">
										<h3>葡挞妈咪泰国Mistine小草莓变色润唇膏口</h3>
									</div>
									<div class="list-price">
										￥9.90
									</div>
								</li>
								<li>
									<div class="list-img">
										<img class="jImg" src="http://img04.aomygod.com/15d794ed24c_2_9c025dbf68b523936638db1866c746c7_719x719.jpeg?imageView/0/w/200" style="display: inline;">	
									</div>
									<div class="list-detail">
										<h3>葡挞妈咪泰国Mistine小草莓变色润唇膏口</h3>
									</div>
									<div class="list-price">
										￥9.90
									</div>
								</li>
							</ul>
				</div>
			</div>
</template>
	
<script>
	export default{
		name:'app-list'
	}
</script>

<style lang="scss" scoped>
		.app-list{
              flex: 1;
              width: 100%;
              display: flex;
              flex-direction: column;
              .list-header{
                  height: .55rem;
              }
              .list-center{
                  height: .2.55rem;
                  img{
                      height: 100%;
                      width: 100%;
                  }
              }
              .list-footer{
                  height: 2.034rem;
                  padding-left: .2rem;
                  ul{
                      display: flex;
                      height: 1.97rem;
                      width: 100%;
                      li{
                            flex: 1;
                            height: 100%;
                            width: 33%;
                            .list-img{
                                width: 1rem;
                                height: 1rem;
                                margin-bottom: .16rem;
                                img{
                                    height: 100%;
                                    width: 100%;
                                }
                            }
                            .list-detail{
                                h3{
                                    color: #555;
                                    font-size: .12rem;
                                    overflow: hidden;
                                    white-space: normal;
                                    line-height: .18rem;
                                }
                            }
                            .list-price{
                                font-size: .12rem;
                                color: #000;
                                padding: .10rem 0 .16rem;
                            }
                      }
                  }
              }
        }  
</style>