<template>
  <div id="app">
      <AppPparticulars/>
      <router-view>/</router-view>
  </div>
</template>

<script>
import AppPparticulars from './components/particulars/particulars.vue'
export default {
  name: 'app',
  components:{
    AppPparticulars
  }

}
</script>

<style lang="scss">
  
</style>
