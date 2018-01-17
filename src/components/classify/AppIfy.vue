<template>
  <div class="app-ify">
      <div :key="item.id" v-for="item in list">
          <div><span></span><h2>{{item.title}}</h2></div>
          <ul>
              <router-link tag="li" to="list" :key="items.id" v-for="items in item.nav">{{items.content}}</router-link>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name : 'app-ify',
  data() {
      return {
          list: []
      }
  },
  mounted() {
      fetch('/api/list')
      .then((response) => response.json())
      .then((res) => {
        //   console.log(res)
          this.list = res.data.classifys
        //   console.log(this.list)
      })
  }
}
</script>

<style lang="scss">

</style>

