<template>
    <div>
        <div class="header">
            <i class="iconfont icon-fanhuijiantouxiangqingye" @click="$router.back(-1)"></i>
            &nbsp; 
             <span>动态</span>
        </div>
        
        <div class="container" v-if="songData.length > 0 " v-for="(item,index) in songData" :key="index">
                <div class="header">
                    <div class="portrait">
                        <img :src="item.user.avatarUrl" alt="">
                    </div>
                    <div class="text">
                        <p>{{item.user.nickname}}</p>
                        <p class="time">{{timestampToTime(item.eventTime)}}</p>
                    </div>
                    <span class="care">+关注</span>
                </div>
                <div class="article-box">
                    <p class="article">{{item.user.signature}}</p>
                    <!-- <p class="all-article">全文</p> -->
                </div>
                
                <div class="img-box" v-for="(items,index) in item.pics" :key="index">
                    <div class="img-item" :class="{'clear-padding': index%3 !== 1}">
                        <img :src="items.pcRectangleUrl" alt="">
                    </div> 
                </div>

                <div class="comment-box">
                    <i class="iconfont icon-dianzan"></i>
                    <span>{{item.info.likedCount}}</span>
                    &nbsp; 
                    <i class="iconfont icon-pinglun"></i>
                    <span>{{item.info.commentCount}}</span>
                    &nbsp; 
                    <i class="iconfont icon-fenxiang"></i>
                    <span>{{item.info.shareCount}}</span>
                </div>
        </div>
        <div v-else>正在加载数据...</div>

         <div class="zan-box">
             <p>赞:</p>
             <div class="head-box">
                 <img src="../assets/images/portrait.png" alt="">
             </div>
              <div class="head-box">
                 <img src="../assets/images/portrait.png" alt="">
             </div>
              <div class="head-box">
                 <img src="../assets/images/portrait.png" alt="">
             </div>
              <div class="head-box">
                 <img src="../assets/images/portrait.png" alt="">
             </div>
         </div>
         <div class="great-comment">
             精彩评论
         </div>
         <div class="comment-item">
              <div class="head">
                    <div class="portrait">
                        <img src="../assets/images/portrait.png" alt="">
                    </div>
                    <div class="text">
                        <p>音乐总局</p>
                        <p class="time">昨天19.14</p>
                    </div>
                    <div class="zan">
                        <span>329</span>
                        <i class="iconfont icon-dianzan"></i>
                    </div>
                </div>
                <div class="article-box">
                    <p class="article"> 
                        曾经有个男生说给我系鞋带,我说我自己有手
                    </p>
                     
                </div>
         </div>
          <div class="comment-item">
              <div class="head">
                    <div class="portrait">
                        <img src="../assets/images/portrait.png" alt="">
                    </div>
                    <div class="text">
                        <p>音乐总局</p>
                        <p class="time">昨天19.14</p>
                    </div>
                    <div class="zan">
                        <span>329</span>
                        <i class="iconfont icon-dianzan"></i>
                    </div>
                </div>
                <div class="article-box">
                    <p class="article"> 
                        曾经有个男生说给我系鞋带,我说我自己有手
                    </p>
                </div>
         </div>
        <div class="write-comment">
            <input type="text" placeholder="写评论">
            <i class="iconfont icon-dianzan"></i>
            <i class="iconfont icon-fenxiang"></i>
        </div>
    </div>
</template>
<script>
import Return from '../components/Return'
import DongtaiComponent from "../components/DongtaiComponent"
export default {
    name:'DtDetail',
    data(){
        return{

        }
    },
    components:{
        DongtaiComponent  
    }
}
</script>

<style lang="less" scoped>
      .header{
        width:100%;
        height:60px;
        background-color:  #875af0;
        padding:20px 0 0 10px;
        box-sizing: border-box;
    }
    .header i,.header span{
        font-size: 20px;
        color:white;
    }
    .zan-box{
        padding:0 10px;
        height:50px;
        line-height: 50px;
    }
    .zan-box p,.zan-box div{
        float: left;
    }
    .head-box{
        width:30px;
        height:30px;
        border-radius: 50%;
        margin-left:5px;
    }
    .head-box img{
        width:100%;
    }
    .great-comment{
        padding:5px 10px;
        background-color: #f5f5f5;
        font-size:12px;
    }
    .comment-item{
        padding:0 10px;
        border-bottom: solid 1px #f5f5f5;
    }
    .comment-item .head{
        display: flex;
        padding-top:10px;
    }
    .portrait{
        flex: 1;
        line-height: 50px;
    } 
    .portrait img{
        width:30px !important;
    }
    .text{
        flex: 7;
        padding-top:5px;
        margin:5px 0 0 10px;
    }
    .zan{
        flex:2;
        font-size:12px;
        margin-top:10px;
        text-align: right;
    }
    .zan i{
        font-size:12px;
    }
    .text p:first-child{
        font-size:12px;
      
    }
     .text p:last-child{
        font-size: 10px; 
        color:#e5e5e5; 
        margin-top:2px;  
    }
    .article-box{
        margin: 0 0 10px 30px;
    }
    .article{
        font-size:12px;  
    }
    .write-comment{
        width: 100%;
        height:50px;
        background-color: #f5f5f5;
        position: fixed;
        bottom: 0;
        left:0;
        padding:10px 10px 0 10px;
        box-sizing: border-box;
    }
    .write-comment input{
        border-bottom: solid 1px #e3e3e3;
        width:80%;
    }
</style>

