<template>
    <div class="app-login">
        <div class="exit">
            <i class="yo-ico exitt">&#xf077;</i>
        </div>
        <div class="logo">
            <img src="//ssl.aomygodstatic.com/mobile-member/images/login/login.png?v=11072350a31ca749" alt="">
        </div>
        <form @submit.prevent = 'login'>
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
                    <i class="yo-ico eye">&#xe611;
</i>
                </div>
            </div>
            <div class="submit">登录</div>
            <div class="forgetpassword">
                <span class="p1">注册</span>
                <span>忘记密码</span>
            </div>
            <div class="three-login">
                <span>QQ</span>
                <span>微博</span>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name:'app-login'
}
</script>

<style lang="scss" scoped>

</style>
