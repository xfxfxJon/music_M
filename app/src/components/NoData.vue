<template>
    <div class="container">
        <img src="../assets/images/surprise.png" alt="">
        <p>暂无数据</p>   
    </div>
</template>
<script>
export default {
    name:'NoData',
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
    img{
        width:120px;
        height:120px;
        position:absolute;
        top:50px;
        left:120px;
    }
    p{
       position:absolute;
        top:180px;
        left:138px; 
    }
}
</style>


