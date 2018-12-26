<template>
    <div>
        <div class="header">
<<<<<<< HEAD
            <i class="iconfont icon-fanhuijiantouxiangqingye" ></i>
=======
            <i class="iconfont icon-fanhuijiantouxiangqingye" @click="$router.back(-1)"></i>
>>>>>>> b01b35f40e7b2cfd7e78c0c56627b20b8f2f7136
            <SearchInput class="search"/>
        </div>
        <div class="content">
            <h3>热门搜索</h3>
            <ul class="hot-song">
                <li>陈绮贞</li>
                <li>李志直播</li>
                <li>生僻字</li>
                <li>浪子回头</li>
                <li>林忆莲</li>
                <li>吴亦凡</li>
            </ul>
        </div>
         <PlaySongComponent />
    </div>
</template>
<script>

 
import SearchInput from "../components/SearchInput"
import PlaySongComponent from "../components/PlaySongComponent"
export default {
    name:"Search",
    data(){
        return{

        }
    },
    components:{
        SearchInput,
        PlaySongComponent
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
    .content{
        padding:15px 10px;
    }
    .hot-song{
        padding:10px 0;
    }
    .hot-song li{
        float:left;
        padding:4px 8px;
        background-color: #f5f5f5;
        border-radius: 20px;
        margin:0 10px 10px 0;
    }
</style>
