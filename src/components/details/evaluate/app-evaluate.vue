<template>
  <div class="app-evaluate">
      <AppMessage/> 
      <p>
         还没有客观评论......
      </p>
  </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';
import AppMessage from '../bacicMessage/bacic-message.vue'
export default {
  name:"app-evaluate",
  data(){
    return{
      active:true
    
    }
  },
   components:{AppMessage},
  methods:{

  }
 
}
</script>
<style lang="scss" scoped>
   p{
      font-size: 18px;
      width: 100%;
      text-align: center;
      padding-top:1rem; 
   }

</style>


