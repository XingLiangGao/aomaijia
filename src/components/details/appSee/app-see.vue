<template>
   <div class="app-see">
        <div class="see">
                   <div class="seeyou">
                                       看了又看
                   </div>
        <div class="seeLeft swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide df" v-for="isDa in isDas" :key="isDa.id">
              <dl class="let">
                      <dt>
                          <img :src="isDa.img"/>
                      </dt>
                      <dd>{{isDa.title}}</dd>
                      <p>￥<span>{{isDa.price1}}</span></p>        
              </dl>
            </div>
           
          </div>
       
      </div>

</div>
</div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
   name:'app-see',
   data:function(){
      return{
           isDas:[]
      }
   },
   methods:{
         getData(){
             let that = this;
            axios.get('/src/falseData/false.json').then((response)=>{       
                that.isDas = response.data.goodlists
            })
         }
   },
   created(){
         this.getData()
   },
   updated(){
         new Swiper('.seeLeft ', {
          slidesPerView: 3,
          spaceBetween: 30,
          
        });
    }
}
</script>
<style lang="scss" scoped>
    
</style>