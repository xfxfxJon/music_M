<template>
    <div>
        <!-- <router-link to="/dtdetail" > -->
            <div class="container" v-if="songData.length > 0 " v-for="(item,index) in songData" :key="index" @click="toDetail">
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
                
                <div class="img-box" >
                    <div class="img-item" >
                        <img v-if="item.pics.length>0" :src="item.pics[0].pcRectangleUrl" alt="">
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
         <!-- </router-link> -->
    </div>
</template>
<script>

export default {
    name:'DongtaiComponent',
    data(){
        return{
            songData:[]
        }
    },
    components:{
         
    },
    mounted() {
      this.$axios
      .get("http://localhost:3000/event")
      .then(res => {
        console.log(res)
        this.songData = res.data.event
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods:{
      timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000); 
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
    },
    toDetail(){
        this.$router.push({
            path: '/dtdetail',
            name: 'DtDetail'  
        })
        localStorage.setItem("item",item)
    }
  }
}
</script>

<style lang="less" scoped>
    .container{
        padding:0 10px;
        overflow: hidden;
        border-top:solid 1px #e3e3e3;
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
        border-radius: 50%;
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
        padding-left:60px;
    }
    .all-article{
        color:#7729d2;
        margin-top:5px;
    }
    .img-box{
        padding-left:60px;
    }
    .img-box .img-item{
        width: 100%;
        margin-bottom: 10px;
    }
     .img-box .mark{
        padding: 0 10px;
     }
     .comment-box{
        float: right;
        font-size:12px;
        padding-bottom: 10px;
     }
     .comment-box i{
        font-size:14px;
     }
    .clear-padding{
        padding: 0 !important;
    }
</style>