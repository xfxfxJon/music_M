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
           <LRC :musicId="this.$route.params.musicId" :currentTime="currentTime" :durationTime="durationTime"/>
           
          <div class="icon">
             <i class="iconfont icon-shoucang" @click="collect" ref="shoucang"></i>
             <i class="iconfont icon-xiazai"></i>
             <i class="iconfont icon-pinglun"></i>
             <i class="iconfont icon-gengduo-copy" @click="iconClickHandler"></i>
          </div>
          <!-- <div class="play">
              <span>01:15</span>
              <img src="../assets/images/scroll-bar.png" alt="">
              <span>01:15</span>
              <img src="../assets/images/slide-button.png" alt="" class="slide-button">
          </div> -->
           <div class='jdt'>
                <span class='start'>{{ftime(this.currentTime)}}</span>
                   <div class='jdt_box_bj'>
                       <div class='jdt_box'  ref="jdt_box_bj"></div>
                    </div>
                <span class='end'>{{ftime(this.durationTime)}}</span>        
            </div>
          <!-- <JDT /> -->
          <div class="play-icon">
              <i class="iconfont icon-danquxunhuan"></i>
              <i class="iconfont icon-xiangzuo"></i>
              <i class="iconfont" :class="clSwitch" @click="bzSwitch"></i>
              <i class="iconfont icon-xiangyou"></i>
              <i class="iconfont icon-bofangliebiao"></i>
          </div>
          
       </div>
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
       <div class="song">
         <audio v-if="songData" :src="songData.url" controls ref="myPlayer" autoplay preload id="music1" hidden></audio>
       </div> 
    </div>
</template>

<script>
import LRC from "../components/LRC" 

export default {
    name:"Player",
    data(){
        return{
            songData:{},
            clSwitch:"icon-zanting",
            songDetailData:{},
            currentTime:0,
            durationTime:0,
            flag:false
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
                localStorage.setItem("musicId",res.data.data[0].id)
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
                // console.log(res)
                this.songDetailData = res.data
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    updated() {
        this.addEventListener();
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
      },
      addEventListener(){
          this.$refs.myPlayer.addEventListener("timeupdate",this._currentTime)
          this.$refs.myPlayer.addEventListener("canplay",this._durationTime)
      },
      removeEventListener(){
          this.$refs.myPlayer.removeEventListener("timeupdate",this._currentTime)
          this.$refs.myPlayer.removeEventListener("canplay",this._durationTime)
      },
      _currentTime(){
          this.currentTime = this.$refs.myPlayer.currentTime
          var bizhi = this.$refs.myPlayer.currentTime / this.$refs.myPlayer.duration;
          this.$refs.jdt_box_bj.style.width=bizhi*100+'%'
      },
      _durationTime(){
          this.durationTime = this.$refs.myPlayer.duration
      },
      ftime(time){
            var muintes = Math.floor(time/60);
            var second = parseInt(time%60);
            muintes = muintes<10 ?'0'+muintes : muintes;
            second = second<10 ?'0'+second : second;
            return muintes+':'+second;
      },
      iconClickHandler(){
          this.flag = !this.flag
      },
      collect(){
          this.$refs.shoucang.style.color="red"
          var info ={
             collectSongId :  this.songData.id
          }
          
          var loc =[]
          loc.push(info)
          localStorage.setItem("collectSong",JSON.stringify(loc))
        
      }
    },
     beforeDestroy() {
         this.removeEventListener();
    },
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
        overflow: hidden;
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
        // margin-top:10px;
    }
    .play-icon .icon-zanting ,.play-icon .icon-play{
        font-size: 50px !important;
    }
    .songinfo p:first-child{
        font-size: 18px;
        width:200px;
    }
    .jdt{
        // float: left;
        width:100%;
        padding:0 20px;
        box-sizing: border-box;
        height:30px;
        line-height: 30px;
    }
    .jdt_box_bj,.start,.end{
        float: left;
    }
    .jdt_box_bj{
        width:73%;
        height:4px;
        background-color: white;
        border-radius: 12px;
        margin:0 10px;
        margin-top: 12px;
    }
    .jdt_box{
        width:0;
        height:4px;
        background-color: #109d59;
        border-radius: 12px;
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


