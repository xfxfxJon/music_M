<template>
       <div class="play-song-box">
             <div class="song-name">
                 <img :src="songDetailData.songs[0].al.picUrl" alt="">
                 <div class="song-info">
                     <p class="song-info-name">{{songDetailData.songs[0].name}}</p>
                     <p>{{songDetailData.songs[0].ar[0].name}}</p>
                 </div>
             </div>
             <div class="play-btn">
                  <i class="iconfont" :class="clSwitch" @click="bzSwitch"></i>
                  <i class="iconfont icon-bofangliebiao"></i>
             </div>
              <div class="song">
                <audio v-if="songData" :src="songData.url" controls ref="myPlayer" autoplay preload id="music1" hidden></audio>
            </div>
         </div>
</template>
<script>
import Return from '../components/Return'
export default {
    name:'PlaySongComponent',
    data(){
        return{
            songData:{},
            songDetailData:{},
            clSwitch:"icon-zanting"
        }
    },
    components:{
        
    },
    mounted(){
         if(localStorage.getItem("musicId")){
            this.$axios.get("http://localhost:3000/music/url",{
                params:{
                    id:localStorage.getItem("musicId")
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
                    ids:localStorage.getItem("musicId")
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
           
        }
    }
}
</script>

<style lang="less" scoped>
    .icon-zanting , .icon-play,.icon-bofangliebiao{
        font-size:30px;
    }
    .play-song-box{
        width:100%;
        height:60px;
        background-color: #f4f4f4;
        position: fixed;
        bottom:0;
        left:0;
        z-index: 100; 
    }
    .song-name img{
        width:50px;
        float: left; 
        margin:5px;
    }
    .song-info{
        float: left;
        line-height: 25px;
        padding-top:5px;
    }
    .song-info-name{
        color:#000;
    }
    .play-btn{
        float: right;
        padding:15px 10px 0 0;
    }
    .play-btn img{
        width:30px;
        margin-left:10px;
    }
</style>

