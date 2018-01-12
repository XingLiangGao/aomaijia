<template>
    <div class="app-list">
        <AppListSearch></AppListSearch>
        <AppNav :type="type"></AppNav>
        <AppListContent :type="type.value"></AppListContent>
    </div>
</template>

<script>
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
      AppListSearch,AppListContent,AppNav
  }
}
</script>

<style lang="scss" scoped>
.app-list{
    overflow:auto;
    height: 100vh;
}
</style>
