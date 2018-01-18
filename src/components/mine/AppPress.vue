<template>
    <div class="app-press">
        <div class="top">
            <router-link class="yo-ico" to="login">&#xf07d;</router-link>
            <div>找回密码</div>
        </div>
        <div class="login">
            <div>
                <i class="yo-ico">&#xe680;</i>
                <mt-field label="" placeholder="手机号/邮箱/用户名"></mt-field>
            </div>
            <div>
                <i class="yo-ico">&#xe621;</i>
                <mt-field placeholder="验证码">
                    <img src="" height="40px" width="100px">
                </mt-field>
            </div>
        </div>
        <button class="submit" type="submit">下一步</button>
    </div>
</template>

<script>
import { Field } from 'mint-ui';
export default {
  name:'app-press'
}
</script>

<style lang="scss" scoped>

</style>
