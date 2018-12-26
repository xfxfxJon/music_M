<template>
    <div class="container">
        <div class="userInfo">
            <img src="../assets/images/xuehuahua.jpg" alt="">
            <span>薛花花</span>
        </div>
       
        <p>暂无动态</p> 
    </div>
</template>
<script>
export default {
    name:'MyDynamic',
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.container{
    width:100%;
    height:600px;
    color:white;
    background: -webkit-linear-gradient(#712AD7, #AE24A6); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#712AD7, #AE24A6); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#712AD7, #AE24A6); /* Firefox 3.6 - 15 */
    background: linear-gradient(#712AD7, #AE24A6); /* 标准的语法 */
    position:relative;
    .userInfo{
        img{
            width:60px;
            height:60px;
            border-radius: 50%;
            margin-top:20px;
            margin-left:20px;
        }
        span{
            display: inline-block;
            width:60px;
            height:60px;
            // line-height:60px;
            margin-top:20px;
            margin-left:20px;
        }
    }
    p{
       position:absolute;
        top:180px;
        left:138px; 
    }
}
</style>


