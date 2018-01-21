<template>
	<div class="app-collect">
		<div class="top">
            <router-link class="yo-ico" to="personal" style="color:#ccc">&#xf07d;</router-link>
            <div>
                <span>我的收藏</span>
            </div>
        </div>
        <div class="ul-content">
            <div class="ul-li" v-for="item in collects" :key="item.id">
                <img :src="item.img" alt="">
                <div class="li-right">
                    <h4>{{item.title}}</h4>
                    <p><span>￥{{item.price1}}</span><strong @click="clearCollect(item.id)">取消收藏</strong></p>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
	name: 'app-collect',
    computed:{
      ...mapState(['collects'])
      
    },
    created() {
        console.log(this.$store.state.collects)
    },
    methods: {
        clearCollect(id) {
          console.log(this.$store.state.collects)
          console.log(id)
            this.$store.state.collects.forEach((item,index) => {
                if(id === item.id){
                    this.$store.state.collects.splice(index,1)
                }
                
            })
        }
    }
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
            margin-top: 10px;
            img{
                width: 77px;
                height: 77px;
            }
            .li-right{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
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
