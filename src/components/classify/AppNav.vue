<template>
  <div class="app-nav">
      <nav>
          <ul>
              <li @click="$store.state.showtype=true" :class="{backgrou:$store.state.showtype}">分类</li>
              <li @click="$store.state.showtype=false" :class="{backgrou:!$store.state.showtype}">国家</li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name : 'app-nav',
  methods : {
      
  },
  data : function () {
      return {
          
      }
  }
}
</script>

<style lang="scss">

</style>

