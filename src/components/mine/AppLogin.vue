<template>
    <div class="app-login">
        <router-link to="/" class="exit">
            <i class="yo-ico exitt">&#xf077;</i>
        </router-link>
        <div class="logo">
            <img src="//ssl.aomygodstatic.com/mobile-member/images/login/login.png?v=11072350a31ca749" alt="">
        </div>
        <form @submit.prevent = 'login'>
            <div class="login">
                <div>
                    <i class="yo-ico">&#xe680;</i>
                    <mt-field placeholder="手机号/邮箱/用户名" v-model="username"></mt-field>
                </div>
                <div>
                    <i class="yo-ico">&#xe603;</i>
                    <mt-field placeholder="请输入用户名" v-model="password"></mt-field>
                    <i class="yo-ico eye" style="font-size:28px">&#xe61d;</i>
                </div>
            </div>
            <button class="submit" type="submit">登录</button>
            <div class="forgetpassword">
                <router-link class="p1" to="register">注册</router-link>
                <router-link class="p2" to="press">忘记密码</router-link>
            </div>
            <div class="three-login">
                <span>QQ</span>
                <span>微博</span>
            </div>
        </form>
    </div>
</template>

<script>
import { Field } from 'mint-ui';
import {Toast} from 'mint-ui';
export default {
  name:'app-login',
  data(){
      return {
          username:'',
          password:''
      }
  },
  methods:{
		login(){
			if(this.username==""||this.password==""){
				alert('请输入手机号和密码')
			}else{
				this.getDate();
			}
		},
		getDate(){
			let that = this
			var storage = window.localStorage.date;
			var storageObj = JSON.parse(storage);

			// console.log(storageObj)
			storageObj.forEach(item=>{
				if(that.username == item.username && that.password == item.password){
					this.$router.push('/mine/personal')
                    Toast("登录成功")
				}else{
					Toast("登录失败")
				}
			})
		}
    }
}
</script>

<style lang="scss" scoped>

</style>
