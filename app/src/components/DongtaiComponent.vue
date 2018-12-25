<template>
    <div>
         <div class="container">
             <div class="header">
                 <div class="portrait">
                     <img src="../assets/images/portrait.png" alt="">
                 </div>
                 <div class="text">
                     <p>音乐总局</p>
                     <p>昨天19.14</p>
                 </div>
                 <span class="care">+关注</span>
             </div>
             <p class="article">【Raaz and Nina】所有失去的，都会以另一种方式归来, 成熟
                的人不问过去，聪明的人，不问现在，豁达的人，不问未来，
             </p>
             <p class="all-article">全文</p>
         </div>
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
    }
    .header{
        display: flex;
        padding-top:10px;
    }
    .portrait,.care{
        flex: 2;
        text-align: center;
        line-height: 50px;
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
    }
    .article{
        font-size:12px;
        font-weight:700;
    }
    .all-article{
        color:#7729d2;
    }
</style>