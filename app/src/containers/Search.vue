<template>
    <div>
        <div class="header">
            <i class="iconfont icon-fanhuijiantouxiangqingye" ></i>
            <SearchInput class="search"/>
        </div>
        
    </div>
</template>
<script>

 
import SearchInput from "../components/SearchInput"

export default {
    name:"Search",
    data(){
        return{

        }
    },
    components:{
        SearchInput
    }
}
</script>
<style lang="less" scoped>
    .header{
        width:100%;
        height:60px;
        background-color:  #875af0;
        position: relative;
        padding-top:1px;
    }
    .header i{
        font-size: 24px;
        color:white;
        position: fixed;
        top:20px;
        left:10px;
    }
    .search{
        margin-left:40px;
        margin-top:18px;
    }
</style>
