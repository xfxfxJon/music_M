<template>
       <div class="play-song-box">
             <div class="song-name">
                 <img src="../assets/images/song-list-head.png" alt="">
                 <div class="song-info">
                     <p class="song-info-name">Volar</p>
                     <p>Alvaro Soler</p>
                 </div>
             </div>
             <div class="play-btn">
                 <img src="../assets/images/play-button.png" alt="">
                 <img src="../assets/images/song-list.png" alt="">
             </div>
         </div>
</template>
<script>
import Return from '../components/Return'
export default {
    name:'PlaySongComponent',
    data(){
        return{

        }
    },
    components:{
        
    }
}
</script>

<style lang="less" scoped>
    
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

