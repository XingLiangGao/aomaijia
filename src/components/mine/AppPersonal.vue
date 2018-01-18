<template>
    <div class="app-personal">
        <div class="top">
            <div class="exit">
                <router-link class="yo-ico" to="login" style="color:#fff">&#xf07d;</router-link>
                <router-link class="yo-ico" to="/" style="color:#fff">&#xe62a;</router-link>
            </div>
            <div class="photo">
                <img src="https://img04.aomygod.com/fontend/201769/imgs/user.png" alt="">
                <p>你好，用户{{this.name}}</p>
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
export default {
  name:'app-personal',
  data() {
      return {
          name: '',
          date:[]
      }
  },
  methods:{
    exit(){
        this.date.push({username:this.username,password:this.password})
        localStorage.date=JSON.stringify(this.date)
        this.$router.push('/mine')
    }
  },
  mounted: function () {
        let that = this
        var storage = window.localStorage.date;
        var storageObj = JSON.parse(storage);

        storageObj.forEach(item=>{
            that.name = item.username
        })
  }
}
</script>

<style lang="scss" scoped>

</style>
