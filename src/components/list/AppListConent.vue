<template>
    <div class="app-list-content">
        
        <div @click="toDetails(list.id)" v-for="list in orderPrice" :key="list.id">
            <img :src="list.img" alt="">
            <div>
                <h4>【<span>{{list.mold}}</span>】<strong>{{list.name}}</strong></h4>
                <div>
                    <div>
                        <p>￥{{list.price1}} <span>￥{{list.oldprice1}}</span></p>
                        <p><span>{{list.evaluatenum}}条评价</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '../../modules/bus'
import axios from "axios"
export default {
  name:'app-list-content',
  props:["type"],
  data() {
      return {
          lists:[]
      }
  },
  computed: {
      orderPrice:function(){
        if(this.type == "price"){
              return this.lists.sort(this.priceNumber)
          }else if(this.type == "sales"){
            return this.lists.sort(this.salesNumber)
          }else if(this.type == "default"){
            return this.lists.sort(this.getId)
          }
        }
  },
    methods:{
        getData() {
            let that = this
            axios.get('/src/falseData/false.json').then((res) => {
                //console.log(res,111)
                that.lists = res.data.goodlists
            })
        },
        changeType() {
            this.lists = []
            this.getData()
        },
        priceNumber(a,b) {
          return a.price1 - b.price1
        },
        salesNumber(a,b) {
          return b.evaluatenum - a.evaluatenum
        },
        getId(a,b){
          return a.id - b.id            
        },
        toDetails(date_id) {
            this.$router.push({ name: 'detailshead', params: { userId: date_id }})
        }
    },
    mounted(){
        this.getData()
        let that = this
        bus.$on("change-type",(type) => {
            that.type = type
            that.changeType()
        })
    }
    
}
</script>

<style lang="scss" scoped>
.app-list-content{
    
    background: #fff;
    padding-bottom: 50px;
    >div{
        height: 147px;
        background-color: #fff;
        padding: 0.2rem 0.1rem 0.2rem 0.1rem;
        border-bottom: 1px solid #DFDFDF;
        display: flex;
        img{
            width: 109px;
            height: 109px;
            margin-right: 20px;
        }
        >div{
            display: flex;
            width: 232px;
            flex-direction: column;
            justify-content: space-between;
            h4{
                span{
                    color:#F03468;
                }
            }
            strong{
                font-weight: normal;
            }
            >div{
                p{
                    color:#F03468;
                    span{
                        font-size: 14px;
                        color: #9D9D9D;
                    }
                    
                }
                p:first-child{
                    font-size: 16px;
                    span{
                        text-decoration: line-through;
                    }
                }
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
}
</style>
