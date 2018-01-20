<template  >
      <div class="app-detailshead">
             <div class="details">
                    <div class="return yo-ico" @click="$router.go(-1)">&#xe604;</div>
                    <p>商品详情</p>
                    <div class="details-right">
                        <span class="yo-ico">&#xe696;</span>
                        
                        <router-link to="/" tag="span" class="yo-ico">&#xe525;</router-link>
                    </div>
            </div> 
            <AppMessage :type= "type" :ele="eleIDs"/>
                       
            <DetailsBottom/>   
      </div>
</template>
<script>
import DetailsBottom from './detailsBottom/details-bottom'
import AppMessage from './bacicMessage/bacic-message'
import axios from 'axios'
export default {
  name : "app-detailshead",
  data:function(){
        return{
              type:{value:1},
              userDate:[],
              eleIDs:[],  
        } 
  },
  components:{DetailsBottom,AppMessage},
  methods:{
        getData(){
              let that = this
              axios.get('/src/falseData/false.json').then((response)=>{
                  //   console.log(response.data.goodlist.id,123)   
                  that.userDate =  response.data.goodlists
                  // console.log( that.userDate)

              })
        }
  },
//   created(){
//       this.getData()
//   },
  created(){
      this.getData()
      var id = this.$route.params.userId;
      let that = this;
      var ele_id = "";
            setTimeout(function(){
            that.userDate.forEach((ele) => {    
                  ele_id = ele.id 
                  console.log(ele_id) 
                  if(ele_id == id){
                  that.eleIDs = ele 
                 
                  }
            }); 
      },500)
  }
  
  
 
}
</script>

<style>

</style>


