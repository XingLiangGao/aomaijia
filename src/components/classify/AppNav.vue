<template>
  <div class="app-nav-class">
      <nav>
          <ul>
              <li @click="showtype.value=!showtype.value" :class="{backgrou:showtype.value}">分类</li>
              <li @click="showtype.value=!showtype.value" :class="{backgrou:!showtype.value}">国家</li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name : 'app-nav',
  props: ['showtype']
}
</script>

<style lang="scss" scoped>

</style>

