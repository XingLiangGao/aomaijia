<template>
    <div class="app-list-search">
       <div>
           <router-link to="classify" class="yo-ico">&#xf07d;</router-link>
           <div>
               <i class="yo-ico" style="font-size:20px;color:#6A6A6A">&#xf067;</i>
               <router-link tag="input" to="AppSearch" type="text" placeholder="搜索"></router-link>
           </div>
           <router-link tag="i" to="/" style="font-size:20px;color:#6A6A6A" class="yo-ico">&#xe62a;</router-link>
       </div>
    </div>
</template>

<script>
export default {
  name:'app-list-search'
}
</script>

<style lang="scss" scoped>
.app-list-search{
    >div{
        display: flex;
        width: 100%;
        height: 47px;
        background: #fff;
        justify-content: space-between;
        padding:0 0.1rem;
        align-items: center;
        >div{
            background: #F2F2F2;
            height: 33px;
            display: flex;
            align-items: center;
            width: 82%;
            padding: 0 0.05rem;
            input{
                border:0;
                background: #F2F2F2;
                padding-left: 0.05rem;
            }
        }
    }
}
</style>
