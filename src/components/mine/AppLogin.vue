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
                    <i class="yo-ico">&#xe63a;</i>
                    <mt-field label="" v-model="username"></mt-field>
                </div>
                <div>
                    <i class="yo-ico">&#xe610;</i>
                    <mt-field label="" v-model="password"></mt-field>
                    <i class="yo-ico eye">&#xe611;</i>
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
          let that = this
          setTimeout(() => {
              if(that.username != '123' || that.password != '456'){
                  Toast("密码错误，登录失败")
                  return false;
              }
              Toast("登录成功")
              let data = {user_id:12345,username:that.username}
              that.$store.commit('changeUserInFo',data)
              that.$router.replace({name:'personal'})
          },500)
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
