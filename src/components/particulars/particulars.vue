<template>
   <div class="app-particulars">
          <AppDetailshead />
         <detailsBottom/>
         
   </div>
</template>
<script>
import AppDetailshead from '../details/app-detailshead'
import detailsBottom from '../details/detailsBottom/details-bottom'
import axios from 'axios'
export default {
  name:'app-particulars',
  components:{ AppDetailshead,detailsBottom},
   data:function(){
        return{
           isShade:false,
           billboards:[]   
        }
  },
  methods:{
     getData(){
         let that = this;
         axios.get('/src/falseData/false.json',{}).then((response)=>{
            console.log(response)
              that.billboards = response.data.goodlists[0]
              console.log(that.billboards.name,99)
         })
     }
  },
  created(){
       	//  this.getData()
       	 
      }
}
</script>
<style lang="scss" scoped>
   
</style>


