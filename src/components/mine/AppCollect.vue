<template>
	<div class="app-collect">
		<div class="top">
            <router-link class="yo-ico" to="personal" style="color:#ccc">&#xf07d;</router-link>
            <div>
                <span>我的收藏</span>
            </div>
        </div>
        <div class="ul-content">
            <div class="ul-li">
                <img src="//img04.aomygod.com/15c3ec56d4d_2_ffa8e1462cf19a3a300a1e0ddf038bf3_800x800.jpeg!m1" alt="">
                <div class="li-right">
                    <h4>Barbie/芭比 娃娃梦幻衣橱手提礼包 芭比娃娃换...</h4>
                    <p><span>￥195</span><strong>取消收藏</strong></p>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
export default {
	name: 'app-collect'
}
</script>
<style lang="scss" scoped>
.app-collect{
	height: 100vh;
	background: #F0F0ED;
	.top{
		height: 47px;
		background: #fff;
        display: flex;
        justify-content: space-between;
        padding:0.1rem;
        font-size: 18px;
        align-items: center;
        div{
            width: 60%;
            display: flex;
            justify-content: space-between;
        }
        i{
            font-size: 20px;
        }
    }
    .ul-content{
        padding: 10px 20px;
        .ul-li{
            width: 100%;
            height: 109px;
            background: #fff;
            padding: 14px 10px;
            display: flex;
            justify-content: space-between;
            img{
                width: 77px;
                height: 77px;
            }
            .li-right{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                span{
                    color: #F03468;
                    font-size: 18px;
                }
                strong{
                    display: inline-block;
                    width: 71px;
                    height: 31px;
                    border: 1px solid #ECECEC;
                    text-align: center;
                    line-height: 31px;
                    font-weight: normal;
                }
                p{
                    display: flex;
                    justify-content: space-between;
                }
                h4{
                    font-weight: normal;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
