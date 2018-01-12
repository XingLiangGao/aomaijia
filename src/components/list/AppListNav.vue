<template>
    <div class="app-list-nav">
        <div>
            <ul>
                <li @click="type.value = 'default'" :class="{active : type.value == 'default'}">默认</li>
                <li @click="type.value = 'price'"  :class="{active : type.value == 'price'}">价格</li>
                <li @click="type.value = 'sales'" :class="{active : type.value == 'sales'}">销量</li>
                <router-link to="filtrate">筛选</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import bus from '../../modules/bus'
export default {
  name:'app-list-content',
  props:["type"],
  data() {
      return {
          
      }
  },
  watch:{
      type() {
          bus.$emit('change-type',this.type)
      }
  }
}
</script>

<style lang="scss" scoped>
.app-list-nav{
    >div{
        ul{
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #F8F8F8;
            height: 38px;
            li{
                padding: 0 10px;
                height: 38px;
                line-height: 38px;
            }
            .active{
                color: #F03468;
                border-bottom: 2px solid #F03468;
            }
            a{
                color: #000;
            }
        }
    }
}
</style>
