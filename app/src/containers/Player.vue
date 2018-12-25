<template>
    <div class="container">
       <div class="header">
           <i class="iconfont icon-fanhuijiantouxiangqingye"></i>
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
        background: url("../assets/images/player-bg.png") ;
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
        background: url("../assets/images/player-box.png");
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
   
</style>


