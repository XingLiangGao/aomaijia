<template>
    <div class="app-message">
         <div class="bacic-message bacic-message">
                    <ul>
                          <li v-for="nav in navs" :key="nav.id"  @click="turn(nav.name)" ><a href="javascript:;">{{nav.content}}</a></li>
                          <!-- <li><a href="javascript:;">图文样式</a></li>
                          <li><a href="javascript:;">商品评价</a></li> -->
                   </ul>
        </div>
    </div>
</template>
<script>
export default {
     name:'app-message',
      data:function(){
           return{
                navs:[
                      {id:1,content:"基本信息",name:'detail'},
                      {id:2,content:"图文样式",name:'imagetext'},
                      {id:3,content:"商品评价",name:'appevaluate'}
                      
                ] 
         }
    },
    
    methods:{
        turn(name){
              console.log(name)
            this.$router.push({name});
           // this.toddleNav();
        }
       
        
    },
}
</script>
<style lang="scss" scoped>
         
</style>
