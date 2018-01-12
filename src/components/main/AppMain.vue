<template lang="html">
    <div class="app-main">
        <app-header></app-header>
        	<app-banner></app-banner>
	        <app-nav></app-nav>
	        <app-list></app-list>
        <app-footer></app-footer>
        <BackTop v-back-top v-scroll-show:30='isBackShow' :isShow='isBackShow'></BackTop>
    </div>
</template> 

<script>
import AppHeader from './AppHeader'
import AppBanner from './AppBanner'
import AppNav from './AppNav'
import AppList from './AppList'
import AppFooter from './AppFooter'
import BackTop from './BackTop'
    export default {
        name:'app-main',
        data(){
        	return {
        		isBackShow:{value:false}
        	}
        },
        components: {
            AppHeader,AppBanner,AppNav,AppList,AppFooter,BackTop
        }
    }
</script>
<style lang="scss" scoped>
		.app-main{
			flex: 1;
	        overflow: hidden;
	        display: flex;
	        flex-direction: column;
	        overflow: scroll;
	        width: 100%;
		}
</style>
