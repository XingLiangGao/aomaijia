<template>
    <div class="app-register">
        <div class="top">
            <router-link class="yo-ico" to="login" style="color:#f03468">&#xf07d;</router-link>
            <div>
                <span>注册奥买家注册</span>
                <router-link to="login" style="color:#f03468">登录</router-link>
            </div>
        </div>
        <div class="login">
            <div>
                <i class="yo-ico">&#xe680;</i>
                <mt-field placeholder="请输入11位手机号码" v-model="username"></mt-field>
            </div>
            <div class="two">
                <i class="yo-ico">&#xe603;</i>
                <mt-field id="pass_word" :type="inputType" placeholder="请输入密码" v-model="password"></mt-field>
                <i v-if="iseye" class="yo-ico eye" @click="eye(), iseye=!iseye" style="font-size:28px">&#xe61d;</i>
                <i v-else class="yo-ico eye" @click="eye(), iseye=!iseye" style="font-size:28px">&#xe624;</i>
            </div>
            <div>
                <i class="yo-ico">&#xe621;</i>
                <mt-field placeholder="6位验证码"></mt-field>
                <span>获取验证码</span>
            </div>
        </div>
        <p>注册视为同意<span>奥买家注册协议</span></p>
        <div class="ensure" @click="register">注册</div>
        <div class="pass">忘记密码</div>
    </div>
</template>

<script>
import { Field, Toast } from 'mint-ui';
export default {
  name:"app-register",
  data(){
    return {
        username: '',  
        password: '',  
        code:'',
        iseye: true,
        inputType:"password",
        date:[]
    }
  },   
  methods:{
    eye() {
     if(this.inputType=="password"){
             this.inputType="text" 
     }else{
     this.inputType="password"
     }
    },
    register(){
      if(this.username==''|| this.password==''){
        Toast('请填写完整信息')
      }
      else {
        var validatephone = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
        if(!validatephone.test(this.username)){
          Toast('请输入正确的手机号')
        }else{
          var validatepassword = /^\S{5,}$/g;
          if(!validatepassword.test(this.password)){
            Toast("请输入5位以上密码")
          }else{
            Toast('注册成功')
            this.updateStorage()
            this.$router.push('/mine/login')
          }
        }
      }
      
    },
    updateStorage(){
      this.date.push({username:this.username,password:this.password})
      localStorage.date = JSON.stringify(this.date)
    },
    getDate(){
      let that = this
      var storage = window.localStorage.date;
      if(storage){
        var storageObj = JSON.parse(storage);
        storageObj.forEach(item=>{
          if(that.username == item.username){
            Toast('该手机号已被注册')
          }
        })
      }else{
        return false
      }
      
    }  
  },
  
//    
}

</script>

<style lang="scss" scoped>

</style>
