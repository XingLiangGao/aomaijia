<template  >
      <div class="image-text">
        
        <div class="basic">
            <ul>
                <li>基本信息</li>
                <li><span>商品名称</span> <span>{{imageTextes.productname}}</span></li>
                <li><span>商品编号</span> <span>{{imageTextes.ProductID}}</span></li>
                <li><span>品牌</span> <span>{{imageTextes.name}}</span></li>
                <li><span>类型</span> <span>{{imageTextes.form}}</span></li>
                <li><span>商品毛重</span> <span>{{imageTextes.weight}}</span></li>
                                           
            </ul>
        </div>
         <p>图文介绍</p>
        <div class="image">
        
                 <div class="image-center">
                      <img v-for="(imag,i) in images" :key="i" :src="imag.url"/>
                 </div>
               
        </div>
      </div>
</template>
<script>
import axios from 'axios'
export default {
  name : "image-text",
  data:function(){
       return{
            imageTextes:[],
            images:[]
       }
  },
  methods:{
        getDate(){
            let that = this
             axios.get('/src/falseData/imageText.json',{}).then((response)=>{
                 console.log(response)
                 that.imageTextes = response.data.particulars[0]
                 that.images =  response.data.particulars[1].imageu
                 console.log(that.images[0].url)
             })
        }
  },
  created(){
      this.getDate()
  }
}
</script>
<style lang="scss" scoped>
    .image-text{
            width:100%;
            height:2.77rem;
            background: white;
        .basic{
               width:100%;
               min-height:2.8rem;
               padding:0 0.1rem;
                background: white;
            ul{
              li{
                 width: 100%;
                min-height:0.43rem;
                 border-bottom: 1px solid #dfdfdf;
                 line-height: 0.43rem;
                 font-size: 14px;
                 display: flex;
                 span{
                   width:2.25rem;
                  //  height:0.43rem ;
                   display: block;
                   &:first-child{
                     padding-right: 0rem;
                   }
                 }
                 &:nth-child(2){
                     min-height:0.43rem;
                     display: table-cell;
                    span{
                        padding-left: 0.05rem;
                        min-height:0.43rem;
                         display: table-cell;
                         line-height: 0.2rem;
                    }
                 }
                  &:nth-child(4){
                     min-height:0.43rem;
                     display: table-cell;
                    span{
                        padding-left: 0.05rem;
                        min-height:0.43rem;
                         display: table-cell;
                         line-height: 0.2rem;
                    }
                 }
                  &:last-child{
                        border-bottom:none;
                  }
              }
            }
        }  
        p{
                     width:100%;
                     height: 0.43rem;
                     line-height: 0.43rem;
                     background: white;
                     margin-top: 0.1rem;
                     padding: 0.1rem;
                   }

        .image{
                  width:100%;
                   min-height:0.43rem;
                   padding:0 0.1rem;
                  background: white;
                   .image-center{
                     width:100%;
                     padding:0;
                      img{
                          width:100%;
                          display: block;
                      }
                   }
              
        }  
    }
</style>



