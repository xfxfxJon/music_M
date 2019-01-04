<template>
    <div>
        <input class="myinput" type="text" v-model="searchData" >
        <button @click="clickHandler" class="btn">搜索</button>
        <ul class="search-song-list" v-if="songData.length>0">
            <li class="search-song-item"  v-for="(item,index) in songData" 
                :key="index">
              <router-link
                :to="{name:'Player',
                params:{musicId:item.id,name:item.name,auther:item.artists.name}}"
                >
                <div class="search-song-name">
                    <p>{{setMusicTitle(item.name)}}</p>
                    <p>
                        <span>{{item.artists[0].name}}</span>
                        <span>{{setMusicTitle(item.name)}}</span>
                    </p>
                </div>
             </router-link>
                <div class="search-song-play">
                    <i class="iconfont icon-play"></i>
                    <i class="iconfont icon-gengduo-copy" @click="iconClickHandler"></i>
                </div>
            </li>
        </ul>
        <div class="bg-more-box" v-show="flag" @click="iconClickHandler">
            <ul class="more-box">
                <li>
                    <i class="iconfont icon-play"></i>
                    <p>下一首播放</p>
                </li>
                <li>
                    <i class="iconfont icon-play"></i>
                    <p>收藏到歌单</p>
                </li>
                <li>
                    <i class="iconfont icon-play"></i>
                    <p>下载</p>
                </li>
                <li>
                    <i class="iconfont icon-play"></i>
                    <p>评论</p>
                </li>
                <li>
                    <i class="iconfont icon-play"></i>
                    <p>分享</p>
                </li>
                <li>
                    <i class="iconfont icon-play"></i>
                    <p>歌手:beyond</p>
                </li>
                <li>
                    <i class="iconfont icon-play"></i>
                    <p>专辑</p>
                </li>
                <li>
                    <i class="iconfont icon-play"></i>
                    <p>查看视频</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"SearchInput",
      props:{
        inputData:{
            type:String,
            default:""
        }
    },
    data(){
        return{
            searchData:this.inputData ,
            songData :[],
            flag:false
        }
    },
  
    watch:{
        searchData(value){
            console.log(value);
        }
    },
    methods:{
        clickHandler(){
            this.$axios.get("http://localhost:3000/search",{
                params:{
                    keywords:this.searchData
                }
            }).then(res => { 
                console.log(res)
                this.songData = res.data.result.songs
            }).catch(error =>new Error(error))
        },
        setMusicTitle(title){
          if(title.length >8 ){
              return title.substring(0,12)+"..."
          }
          return title;
      },
      iconClickHandler(){
          this.flag = !this.flag
      }
    }
}
</script>
<style lang="less" scoped>
    .myinput{
        border: 1px solid #fff;
        border-radius: 15px;
        background: #fff;
        width:75%;
        height:25px;
        margin-right:8px;
        padding-left:8px;
    }
   
    .btn{
        background-color: #875af0;
        border:none;
        color:white;
        font-size:16px;
        
    }
    .search-song-list{
        position: absolute;
        top:70px;
        left:0;
        z-index: 1;
        background-color: #fff;
        padding:0 10px;
        width:100%;
        // height:100%;
        box-sizing: border-box;
        // overflow: hidden;
    }
    .search-song-item{
        overflow: hidden;
        border-bottom:solid 1px #e3e3e3; 
    }
    .search-song-name{
        float: left;
        width:85%;
        padding: 10px 0;
    }
    .search-song-name p:first-child{
        color:blueviolet;
        font-size:16px;
    }
    .search-song-play{
        float: right;
        padding: 10px 0;
    }
    .bg-more-box{
        width:100%;
        height:100%;
        background-color: rgba(0,0,0, .2);
        position: fixed;
        bottom: 0;
        left:0;
        z-index: 199;
    }
    .more-box{
        width:100%;
        background-color: #fff;
        padding: 0 10px;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left:0;
        z-index: 200;
        border-radius: 5px;
    }
    .more-box li{
        overflow: hidden;
       
    }
    .more-box li i{
        float:left;
        padding:5px 0;
    }
    .more-box li p{
        width:90%;
        float:left;
        margin-left:10px;
        padding:8px 0;
        border-bottom: solid 1px #e3e3e3;
    }
</style>

