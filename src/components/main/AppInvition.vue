<template lang="html">
	<div class="app-invition">
		<div class="invition-header">
			<router-link to="/" tag="div" class="city">
					<i class="yo-ico">&#xf07d;</i>
			</router-link>
			<div class="title">
				<a href="#">邀请有礼</a>
			</div>
			<router-link to="/" tag="div" class="search">
				<i class="yo-ico">&#xe677</i>
			</router-link>
		</div>
		<section>
			<div class="section-top">
		        <a href="javascript:;" class="invite-btn">邀请好友</a>
		        <a href="javascript:;" class="view-list">邀请记录 &gt;</a>
			</div>
			<div class="section-buttom">
				 <h1></h1>
				 <div class="rand-lsit">
				 	<table>
	                    <thead>
	                        <tr>
	                            <th class="row-rand">排名</th>
	                            <th class="row-user">用户</th>
	                            <th class="row-count">邀请人数</th>
	                        </tr>
	                    </thead>
	                </table>
				 </div>
	                <div class="rand-page">
	                	<table>
		                    <tbody>	
		                    	<tr v-for="(user,i) in users">
		                    		<td> <i class="no1">{{user.id}}</i></td> 
		                    		<td > <span class="user-img"><img :src="user.src"> </span><div class="name">{{user.name}}</div></td>
		                    		<td>{{user.num}}</td>
		                    	</tr>
		                    </tbody>
	                	</table>
	                </div>		
			</div>	
		</section>
	</div>
</template>
	
<script>
	export default{
		name:'app-invition',
		data:function(){
			return {
				users:[
				{id:1,src:"https://img04.aomygod.com/14d8edd0b1d_c7_636668acb385344dca4b4d958a375e09_300x300.jpeg",name:"**QQ1791199133",num:196},
				{id:2,src:"https://s1.aomygodstatic.com/gshop/images/my-center/user.png",name:"**QQ1791199133",num:196},
				{id:3,src:"https://img04.aomygod.com/15cc59c1408_c7_05baf7f2ece459fce7f104241927b2b2_300x300.jpeg",name:"**QQ1791199133",num:196},
				{id:4,src:"https://img04.aomygod.com/14d8edd0cae_c7_bba660c42bd92c77cde6c7a5d014fc19_300x300.jpeg",name:"**QQ1791199133",num:196},
				{id:5,src:"https://img04.aomygod.com/14d8edd0c2d_c7_34929dddb3fe38f8ba42926517743f52_300x300.jpeg",name:"**QQ1791199133",num:196},
				{id:6,src:"https://img04.aomygod.com/14d8edd0e09_c7_9399cbcf97226a14248923e5c40ed428_300x300.jpeg",name:"**QQ1791199133",num:196},
				{id:7,src:"https://img04.aomygod.com/14d8edd0b1d_c7_636668acb385344dca4b4d958a375e09_300x300.jpeg",name:"**QQ1791199133",num:196},
				{id:8,src:"https://img04.aomygod.com/14d8edd0d2e_c7_4a2d95c3ad0437ede53d71d9a6c592ed_300x300.jpeg",name:"**QQ1791199133",num:196},
				{id:9,src:"https://img04.aomygod.com/14d8edd0e93_c7_68d7be43e522fe2ca13490fb6b50cf83_300x300.jpeg",name:"**QQ1791199133",num:196},
				{id:10,src:"https://img04.aomygod.com/14d8edd0efd_c7_fb7ab0601e50dfd1d02b010742d00f52_300x300.jpeg",name:"**QQ1791199133",num:196}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
		.app-invition{
			height: 100%;
 			width: 100%;
	 		.invition-header{
	            height: .48rem;
	            display:flex;
	            background:#fff;
	            div{
	                display: flex;
	                justify-content: center;
	                align-items: center;
	                &:first-child{
	                    width: .4rem;
	                    color:#333;
	                    i{
	                    	font-size: 0.2rem;
	                    }
	                }
	                &:nth-child(2){
	                     flex: 1;
	                    a{
	                        font-size: 18px;
	                        color:#333;
	                    }
	                }
	                &:last-child{
	                    width: .8rem;
	                    i{
	                        font-size: 0.26rem;
	                        float:right;
	                        margin-left: .4rem;
	                    }
	                }
	            }
	        }
	        section{
	        	height: 100%;
	        	overflow: scroll;
	        	.section-top{
	        	width: 100%;
	        	height: 4rem;
	        	overflow: hidden;
				font-size: .32rem;
				line-height: .48rem;
				margin-top: 0rem;
				text-align: center;
					background: url(https://img04.aomygod.com/fontend/2017824/screen/invite1.jpg) center center no-repeat #f8f8f8;	
				background-size: 100% 100%;	
				   .invite-btn{
				   	display: block;
					width: 3.45rem;
					height: 0.47rem;
					background: #e6465a;
					line-height: 0.5rem;
					margin: 2.8rem auto 0;
					border-radius: .1rem;
					font-size: .18rem;
					text-align: center;
					color: #fff;
				   }
				   .view-list{
				   	display: block;
					width: 3.4rem;
					margin: 0 auto;
					text-align: center;
					color: #333;
					font-size: .14rem;
				   }
	        	}
	        	.section-buttom{
	        		background: #f8f8f8;
	        		padding-bottom: .4rem;
	        		h1{
			        	background: url(https://img04.aomygod.com/fontend/2017424/516share/img/rankTitle.png) center center no-repeat;
		    			background-size: auto auto;
						background-size: .8rem .2rem;
						height: .61rem;
	        		}
	        		.rand-lsit{
	        			padding-left: .22rem;
	        			table{
	        				width: 100%;
	        				border-collapse: collapse;
							border-spacing: 0;
	        			thead{
	        				tr{
	        					th{
	        						height: .6rem;
									padding-bottom: .1rem;
									color: #666;
									font-style: normal;
									text-align: left;
									font-size: .14rem;
									&:first-child{
										width: .35rem;
									}
									&:nth-child(2){
										padding-left: .6rem;
										
									}
									&:last-child{
										width: .815rem;
										text-align: center;
									}
	        					}
	        				}
	        			}
	        		}
	        		}
	        		.rand-page{
	        			padding-left: .22rem;
	        			table{
	        				width: 100%;
	        				border-collapse: collapse;
							border-spacing: 0;
	        				tbody{
	        					padding-bottom: .4rem;
	        					tr{
	        						padding-bottom: .4rem;
	        						td{
	        							padding: .2rem 0;
										color: #222;
										font-size: .14rem;
										text-align: left;
										border-bottom: 1px solid #ddd;
										&:first-child{
											width: .35rem;
											i{
												display: inline-block;
												margin-left: .1rem;
												width: .16rem;
												height: .16rem;
												color: #fff !important;
												font-family: Arial,'Microsoft Yahei';
												background: #faa05a;
												font-size: .12rem;
												border-radius: 100%;
												text-align: center;
												color: #333;
												font-style: normal;
											}
										}
										&:nth-child(2){
											span{
												    float: left;
												    width: .4rem;
												    height: .4rem;
												    border-radius: 100%;
												    overflow: hidden;
												    img{
												    	width: 100%;
														height: auto;
														border: none;
														vertical-align: middle;
												    }
											}
											.name{
												float: left;
												width: 1.41rem;
												line-height: .4rem;
												margin-left: .2667rem;
												text-overflow: ellipsis;
												white-space: nowrap;
												overflow: hidden;
											}
										}
										&:last-child{
											width: .815rem;
											text-align: center;
										}
	        						}
	        					}
	        				}
	        			}
	        		}
	        		
	        	}
	        }
		}
</style>