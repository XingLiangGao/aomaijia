<template>
    <div class="app-list">
        <AppListSearch></AppListSearch>
        <AppNav :type="type"></AppNav>
        <AppListContent :type="type.value"></AppListContent>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
import AppFooter from '../main/AppFooter'
import AppListSearch from './AppListSearch';
import AppListContent from './AppListConent';
import AppNav from './AppListNav'
export default {
  name:'app-list',
  data() {
      return {
          type:{
           value:   'default'
          }
      }
  },
  components:{
      AppListSearch,AppListContent,AppNav,AppFooter
  }
}
</script>

<style lang="scss" scoped>
.app-list{
    overflow:auto;
    height: 100vh;
    margin-top: 0;
}
</style>
