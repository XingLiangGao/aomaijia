<template>
    <div class="app-press">
        <div class="top">
            <router-link class="yo-ico" to="login">&#xf07d;</router-link>
            <div>找回密码</div>
        </div>
        <div class="login">
            <div>
                <i class="yo-ico">&#xe680;</i>
                <mt-field label="" v-model="username" placeholder="手机号/邮箱/用户名"></mt-field>
            </div>
            <div>
                <i class="yo-ico">&#xe621;</i>
                <mt-field id="inp" v-model="coder" placeholder="验证码"></mt-field>
                <span @click="random" style="font-size:20px;">{{code}}</span>
            </div>
        </div>
        <button class="submit" type="submit" @click="submit">下一步</button>
    </div>
</template>

<script>
import { Field, Toast } from 'mint-ui';
export default {
  name:'app-press',
  data() {
    return {
        code: '',
        username: '',
        coder: ''
    }
  },
  created() {
    this.random()
  },
  methods:{
    submit() {
        if(this.username==""||this.coder==""){
            Toast('请输入手机号和验证码')
        }else{
            this.getDate();
        }
    },
    random() {
        var arr = "0123456789qwertyuiopasdfghjklzxcvbnm";
        this.code = arr[Math.floor(Math.random() * 36)] + arr[Math.floor(Math.random() * 36)] + arr[Math.floor(Math.random() * 36)] + arr[Math.floor(Math.random() * 36)];
    },
    getDate() {
        var oInp = document.getElementsByClassName("mint-field-core")[1]
        let that = this
        var storage = window.localStorage.date;
        if(storage){
            var storageObj = JSON.parse(storage);
            storageObj.forEach(item=>{
                if(that.username == item.username && oInp.value == that.code){
                    Toast("您的密码是"+item.password)
                    this.$router.push("login")
                }else{
                    Toast("找回失败")
                }
            })
        }else{
            Toast("找回失败")
        } 
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
