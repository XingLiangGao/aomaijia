<template>
    <div class="app-personal">
        <div class="top">
            <div class="exit">
                <router-link class="yo-ico" to="login">&#xe6f2;</router-link>
                <router-link class="yo-ico" to="AppMain">&#xe62a;</router-link>
            </div>
            <div class="photo">
                <img src="https://img04.aomygod.com/fontend/201769/imgs/user.png" alt="">
                <p>你好，用户{{user_info.username}}</p>
            </div>
            <ul>
                <li><i class="yo-ico">&#xe69b;</i><span>待付款订单</span></li>
                <li><i class="yo-ico">&#xe60c;</i><span>物流查询</span></li>
                <li><i class="yo-ico">&#xe639;</i><span>优惠券</span></li>
            </ul>
        </div>
        <div class="bottom">
            <ul>
                <li><i class="yo-ico tt">&#xe60f;</i><span>全部订单</span></li>
                <li><i class="yo-ico tt">&#xe67d;</i><span>我的收藏</span></li>
                <li><i class="yo-ico tt">&#xe616;</i><span>商品评价</span></li>
                <li><i class="yo-ico">&#xe660;</i><span>收货地址</span></li>
                <li><i class="yo-ico">&#xe7a9;</i><span>身份证信息</span></li>
                <li><i class="yo-ico">&#xe618;</i><span>资讯</span></li>
            </ul>
            <button @click="exit" class="logout">退出</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'app-personal',
  computed:mapState(['user_info']),
  methods:{
      exit(){
          this.$store.commit('exit')
          this.$router.replace({name:'login'})
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
