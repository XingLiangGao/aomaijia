
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
</style>
