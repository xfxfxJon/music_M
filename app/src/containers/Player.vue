<template>
    <div class="container">
       <div class="header">
           <i class="iconfont icon-fanhuijiantouxiangqingye" @click="$router.back(-1)"></i>
           <div class="songinfo">
                <p>{{setMusicTitle(songDetailData.songs[0].name)}}</p>
                <p>{{songDetailData.songs[0].ar[0].name}}</p>
           </div>
           <i class="iconfont icon-fenxiang"></i>
       </div>
       <Lrc />
       <div class="content">
           <div class="singer-img-box">
               <img :src="songDetailData.songs[0].al.picUrl" alt="">
           </div>
           <LRC :musicId="this.$route.params.musicId"/>
            
          <div class="icon">
             <i class="iconfont icon-shoucang"></i>
             <i class="iconfont icon-xiazai"></i>
             <i class="iconfont icon-pinglun"></i>
             <i class="iconfont icon-gengduo-copy"></i>
          </div>
          <div class="play">
              <span>01:15</span>
              <img src="../assets/images/scroll-bar.png" alt="">
              <span>01:15</span>
              <img src="../assets/images/slide-button.png" alt="" class="slide-button">
          </div>
          <div class="play-icon">
              <i class="iconfont icon-danquxunhuan"></i>
              <i class="iconfont icon-xiangzuo"></i>
              <i class="iconfont" :class="clSwitch" @click="bzSwitch"></i>
              <i class="iconfont icon-xiangyou"></i>
              <i class="iconfont icon-bofangliebiao"></i>
          </div>
          
       </div>
       <div class="song">
         <audio v-if="songData" :src="songData.url" controls ref="myPlayer" autoplay preload id="music1" hidden></audio>
       </div> 
    </div>
</template>

<script>
import LRC from "../components/LRC";
export default {
    name:"Player",
    data(){
        return{
            songData:{},
            clSwitch:"icon-zanting",
            songDetailData:{}
        }
    },
    components:{
        LRC
    },
    mounted(){
        if(this.$route.params.musicId){
            this.$axios.get("http://localhost:3000/music/url",{
                params:{
                    id:this.$route.params.musicId
                }
            })
            .then(res=>{
                console.log(res)
                this.songData = res.data.data[0]
            })
            .catch(error=>{
                console.log(error)
            })

             this.$axios.get("http://localhost:3000/song/detail?",{
                params:{
                    ids:this.$route.params.musicId
                }
            })
            .then(res=>{
                console.log(res)
                this.songDetailData = res.data
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    methods:{
        bzSwitch(){
            // if(this.$refs.myPlayer !== null){
            //     alert(audio.paused);
                if(this.$refs.myPlayer.paused){                 
                    this.$refs.myPlayer.play(); 
                    this.clSwitch = "icon-zanting" 
                }else{
                this.$refs.myPlayer.pause();
                 this.clSwitch = "icon-play" 
                }
            // }
           
        },
         setMusicTitle(title){
          if(title.length >8 ){
              return title.substring(0,12)+"..."
          }
          return title;
      }
    }
}
</script>

<style lang="less" scoped>
    .container{
        width:100%;
        height:100%; 
        background: url("src/assets/images/player-bg.png") ;
        background-size:100%;
        background-repeat: no-repeat;
        padding-top:10px;
        box-sizing: border-box;
    }
    .header{
        display: flex;
        text-align: center;
        height:60px;
        line-height: 25px;
        padding:0 10px;
        box-sizing: border-box;
       border-bottom: solid 1px #e5e5e5;
    }
    .header i,.header .songinfo{
        flex: 1;
    }
    .header .songinfo{
        padding-top:8px;
    }
    .header i:first-child{
        text-align: left;
        line-height: 60px;
        font-size:28px;
    }
    .header i:last-child{
        text-align: right;
        line-height: 60px;
        font-size:28px;
    }
    
    .singer-img-box{
        width:80%;
        height:288px;
        margin:20px auto;
        background: url("src/assets/images/player-box.png");
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }
    .singer-img-box img{
        width:92.5%;
        position: absolute;
        top:12px;
        left:11px;
    }
    .icon{
        margin:20px 0 10px;
        display: flex;
    }
    .icon i,.play-icon i{
        flex: 1;
        font-size:28px;
        text-align: center;
        color: white;
    }
    .play{
        text-align: center;
        font-size:12px;
        color:white;
        position: relative;
    }
    .play img{
        width:60%;
    }
    .slide-button{
        width:15px !important;
        position: absolute;
        top:0;
        left:132px; 
    }
    .play-icon{
        display: flex;
        line-height: 60px;
        margin-top:10px;
    }
    .icon-zanting , .icon-play{
        font-size: 50px !important;
    }
    .songinfo p:first-child{
        font-size: 18px;
        width:200px;
    }
</style>


