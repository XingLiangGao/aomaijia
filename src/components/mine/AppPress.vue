<template>
    <div class="app-press">
        <div class="top">
            <i class="yo-ico">&#xe6f2;</i>
            <div>找回密码</div>
        </div>
        <div class="login">
            <div>
                <i class="yo-ico">&#xe63a;</i>
                <mt-field label="" placeholder="手机号/邮箱/用户名"></mt-field>
            </div>
            <div>
                <i class="yo-ico">&#xe610;</i>
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
