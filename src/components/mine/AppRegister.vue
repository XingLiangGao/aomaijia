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
                <mt-field label="" v-model="username"></mt-field>
            </div>
            <div class="two">
                <i class="yo-ico">&#xe603;</i>
                <mt-field label="" v-model="password"></mt-field>
                <i class="yo-ico eye" style="font-size:28px">&#xe61d;</i>
            </div>
            <div>
                <i class="yo-ico">&#xe621;</i>
                <mt-field label=""></mt-field>
            </div>
        </div>
        <p>注册视为同意<span>奥买家注册协议</span></p>
        <div class="ensure" @click="register">注册</div>
        <div class="pass">忘记密码</div>
    </div>
</template>

<script>
import { Field } from 'mint-ui';
export default {
  name:'app-register',
  data() {
      return {
          date:[],
          username:'',
          password:''
      }
  },
  methods:{
		register(){
			if(this.username==''|| this.password==''){
				alert('请填写完整信息')
			}else{
				this.$router.push('/mine')
				 this.updateStorage()
				 alert('注册成功')
			}
		},
		updateStorage(){
			this.date.push({username:this.username,password:this.password})
			// console.log(this.date)
			localStorage.date=JSON.stringify(this.date)

		}
    },
}
</script>

<style lang="scss" scoped>

</style>
