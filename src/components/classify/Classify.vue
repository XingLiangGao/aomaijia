<template>
    <div class="app-classify">
        <AppNav></AppNav>
        <AppIfy></AppIfy>
        <AppCity></AppCity>
    </div>  
</template>

<script>
import AppNav from './AppNav'
import AppIfy from './AppIfy'
import AppCity from './AppCity'
    export default {
        name : 'app-classify',
        components : {
            AppNav,AppIfy,AppCity
        }
    }
</script>

<style lang="scss">

</style>
