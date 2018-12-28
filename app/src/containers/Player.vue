<template>
    <div class="container">
       <div class="header">
           <i class="iconfont icon-fanhuijiantouxiangqingye" @click="$router.back(-1)"></i>
           <div class="songinfo">
                <p>演员</p>
                <p>薛之谦</p>
           </div>
           <i class="iconfont icon-fenxiang"></i>
       </div>
       <div class="content">
           <div class="singer-img-box">
               <img src="../assets/images/singer-xzq.png" alt="">
           </div>
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
              <i class="iconfont icon-play"></i>
              <i class="iconfont icon-xiangyou"></i>
              <i class="iconfont icon-bofangliebiao"></i>
          </div>
       </div>
    </div>
</template>

<script>

export default {
    name:"Player",
    data(){
        return{

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
        width:92%;
        position: absolute;
        top:12px;
        left:12px;
    }
    .icon{
        margin:120px 0 10px;
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
    .icon-play{
        font-size: 60px !important;
    }
</style>


