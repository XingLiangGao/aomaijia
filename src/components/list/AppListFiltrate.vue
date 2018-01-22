<template>
    <div class="app-list-filtrate">
        <div class="top">
            <router-link to="list" class="yo-ico">&#xf07d;</router-link>
            <div>
                <span @click="isShow=false,ispp=true,isjj=true,isback=1,isbackjj=1">清除筛选</span>
                <router-link to="list" tag="span">确定</router-link>
            </div>
        </div>
        <ul>
            <li @click="isShow=!isShow"><span>只显示有货</span><strong :class="{active : isShow == true}"></strong></li>
            <li @click="ispp=!ispp"><span>品牌</span><i class="yo-ico">&#xf2ae;</i></li>
            <li @click="isback='isback1'" class="content" :class="{'con_active':ispp, 'con_back':isback=='isback1'}"><span>Adidas/阿迪达斯</span></li>
            <li @click="isback='isback2'" class="content" :class="{'con_active':ispp, 'con_back':isback=='isback2'}"><span>Amoie Stagione/恋爱季</span></li>
            <li @click="isback='isback3'" class="content" :class="{'con_active':ispp, 'con_back':isback=='isback3'}"><span>Gramont des moulins/佳梦磨坊</span></li>
            <li @click="isjj=!isjj""><span>价格</span><i class="yo-ico">&#xf2ae;</i></li>
            <li @click="isbackjj='isback1'" class="content" :class="{'pri_active':isjj, 'con_back':isbackjj=='isback1'}"><span>0-3000</span></li>
            <li @click="isbackjj='isback2'" class="content" :class="{'pri_active':isjj, 'con_back':isbackjj=='isback2'}"><span>3000-6000</span></li>
            <li @click="isbackjj='isback3'" class="content" :class="{'pri_active':isjj, 'con_back':isbackjj=='isback3'}"><span>6000-12000</span></li>
        </ul>
    </div>
</template>

<script>
export default {
  name:'app-list-filtrate',
  data() {
      return {
          isShow: false,
          ispp: true,
          isjj: true,
          isback: 1,
          isbackjj: 1
      }
  },
  mouted() {
    console.log(this.isback)
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
        .con_active{
            display: none;
        }
        .pri_active{
            display: none;
        }
        .con_back{ background: #F03468!important; color: #fff!important; }
        .content{
            background: #fff;
            font-size: 14px;
            color: #666;
        }
    }
}
</style>
