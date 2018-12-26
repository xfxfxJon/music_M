<template>
    <div>
        <router-link to="/dtdetail">
            <div class="container">
                <div class="header">
                    <div class="portrait">
                        <img src="../assets/images/portrait.png" alt="">
                    </div>
                    <div class="text">
                        <p>音乐总局</p>
                        <p class="time">昨天19.14</p>
                    </div>
                    <span class="care">+关注</span>
                </div>
                <div class="article-box">
                    <p class="article">【Raaz and Nina】所有失去的，都会以另一种方式归来, 成熟
                        的人不问过去，聪明的人，不问现在，豁达的人，不问未来，
                    </p>
                    <p class="all-article">全文</p>
                </div>
                
                <div class="img-box">
                    <div class="img-item">
                        <img src="../assets/images/dongtai-img.png" alt="">
                    </div>
                    <div class="img-item mark">
                        <img src="../assets/images/dongtai-img.png" alt="">
                    </div>
                    <div class="img-item">
                        <img src="../assets/images/dongtai-img.png" alt="">
                    </div>
                </div>
                <div class="comment-box">
                    <i class="iconfont icon-dianzan"></i>
                    <span>702</span>
                    &nbsp; 
                    <i class="iconfont icon-pinglun"></i>
                    <span>226</span>
                    &nbsp; 
                    <i class="iconfont icon-fenxiang"></i>
                    <span>305</span>
                </div>
            </div>
         </router-link>
    </div>
</template>
<script>

export default {
    name:'DongtaiComponent',
    data(){
        return{

        }
    },
    components:{
         
    }
}
</script>

<style lang="less" scoped>
    .container{
        padding:0 10px;
        overflow: hidden;
    }
    .header{
        display: flex;
        padding-top:10px;
    }
    .portrait,.care{
        flex: 2;
        line-height: 50px;
    }
    .portrait{
        text-align: left;
    }
    .care{
        text-align: right;
        color:#e73e32;
    }
    .portrait img{
        width:50px !important;
    }
    .text{
        flex: 6;
        padding-top:5px;
    }
    .text p:first-child{
        font-size: 18px;
        font-weight:500;
         
    }
     .text p:last-child{
        font-size: 12px; 
        color:#e5e5e5; 
        margin-top:2px;  
    }
    .article-box{
        padding:5px 0;
    }
    .article{
        font-size:12px;
        font-weight:700;
    }
    .all-article{
        color:#7729d2;
        margin-top:5px;
    }
    .img-box .img-item{
        float: left;
        width: 31.33%;
        margin-bottom: 10px;
    }
     .img-box .mark{
        padding: 0 10px;
     }
     .comment-box{
         float: right;
        font-size:12px;
     }
     .comment-box i{
        font-size:14px;
     }
</style>