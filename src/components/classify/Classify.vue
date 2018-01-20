<template>
    <div class="app-classify">
        <AppNav :showtype="showtype"></AppNav>
        <AppIfy v-if="showtype.value"></AppIfy>
        <AppCity v-else></AppCity>
        <AppFooter></AppFooter>
    </div>  
</template>

<script>
import AppNav from './AppNav'
import AppIfy from './AppIfy'
import AppCity from './AppCity'
import AppFooter from '../main/AppFooter'
    export default {
        name : 'app-classify',
        components : {
            AppNav,AppIfy,AppCity,AppFooter
        },
        data : function () {
            return {
                showtype:{value:true}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
