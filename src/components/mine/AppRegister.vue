<template>
    <div class="app-register">
        <div class="top">
            <router-link class="yo-ico" to="login">&#xe6f2;</router-link>
            <div>
                <span>注册奥买家注册</span>
                <router-link to="login">登录</router-link>
            </div>
        </div>
        <div class="login">
            <div>
                <i class="yo-ico">&#xe63a;</i>
                <input type="text">
                <i class="yo-ico close">&#xe705;</i>
            </div>
            <div>
                <i class="yo-ico">&#xe610;</i>
                <input type="password">
                <i class="yo-ico close">&#xe705;</i>
                <i class="yo-ico eye">&#xe611;</i>
            </div>
            <div>
                <i class="yo-ico">&#xe621;</i> 
                <input type="password">
                <i class="yo-ico code">获取验证码</i>
            </div>
        </div>
        <p>注册视为同意<span>奥买家注册协议</span></p>
        <div class="ensure">注册</div>
        <div class="pass">忘记密码</div>
    </div>
</template>

<script>
export default {
  name:'app-register'
}
</script>

<style lang="scss" scoped>

</style>
