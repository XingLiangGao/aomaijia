<<<<<<< HEAD

<template lang="html">
	<div  id="app" class="container">
	   
	    <router-view></router-view>
   </div>
</template>

<script>
	export default {
	  name: 'app',
	  data:function() {
	    return{
	    	
	    }
	  },
	
	  components:{}
	
	}

</script>

<style lang="scss">
#app{
  height: 100%;
}
=======
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
  
>>>>>>> aj
</style>
