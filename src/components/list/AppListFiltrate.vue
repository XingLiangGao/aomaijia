<template>
    <div class="app-list-filtrate">
        <div class="top">
            <router-link to="list" class="yo-ico">&#xf07d;</router-link>
            <div>
                <span @click="isShow=false">清除筛选</span>
                <router-link to="list" tag="span">确定</router-link>
            </div>
        </div>
        <ul>
            <li><span>只显示有货</span><strong @click="isShow=!isShow" :class="{active : isShow == true}"></strong></li>
            <li @click="ispp=!ispp"><span>品牌</span><i class="yo-ico">&#xf2ae;</i></li>
            <li class="content"><span>Adidas/阿迪达斯</span></li>
            <li class="content"><span>Amoie Stagione/恋爱季</span></li>
            <li class="content"><span>Gramont des moulins/佳梦磨坊</span></li>
            <li @click="isjj=!isjj""><span>价格</span><i class="yo-ico">&#xf2ae;</i></li>
            <li class="content"><span>0-3000</span></li>
            <li class="content"><span>3000-6000</span></li>
            <li class="content"><span>6000-12000</span></li>
        </ul>
    </div>
</template>

<script>
export default {
  name:'app-list-filtrate',
  data() {
      return {
          isShow:false,
          ispp:false,
          isjj:false
      }
  }
}
</script>

<style lang="scss" scoped>
.app-list-filtrate{
    background:#fff;
    height: 100vh;
    .top{
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        align-items: center;
        height: 47px;
        background: #fff;
        >i{
            font-size: 20px;
        }
        >div{
            display: flex;
            justify-content: space-between;
            span{
                display: inline-block;
                height: 30px;
                text-align: center;
                line-height: 30px;
                border-radius: 4px;
            }
            span:nth-of-type(1){
                background: #FDFDFD;
                width: 100px;
            }
            span:nth-of-type(2){
                background: #F03468;
                width: 80px;
                color: #fff;
            }
        }
    }
    ul{
        li{
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #DFDFDF;
            height: 45px;
            background: #F8F8F8;
            .active{
                background: #F03468;
            }
            strong{
                display: inline-block;
                width: 20px;
                height: 20px;
                background: #DFDFDF;
                border-radius: 50%;
            }
        }
        .content{
            background: #fff;
            font-size: 14px;
            color: #666;
        }
    }
}
</style>
