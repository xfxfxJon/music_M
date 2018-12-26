<template>
    <div class="frame">
        <h3>{{title}}</h3>
        <div class="model">
                <div class="models">
                    <img src="../assets/images/singer.png" alt="">
                    <p>用声音，治愈每一个孤独患者</p>
                </div>
                <div class="models">
                    <img src="../assets/images/singer.png" alt="">
                    <p>用声音，治愈每一个孤独患者</p>
                </div>
                <div class="models">
                    <img src="../assets/images/singer.png" alt="">
                    <p>用声音，治愈每一个孤独患者</p>
                </div>
                <div class="models">
                    <img src="../assets/images/singer.png" alt="">
                    <p>用声音，治愈每一个孤独患者</p>
                </div>
                <div class="models">
                    <img src="../assets/images/singer.png" alt="">
                    <p>用声音，治愈每一个孤独患者</p>
                </div>
                <div class="models">
                    <img src="../assets/images/singer.png" alt="">
                    <p>用声音，治愈每一个孤独患者</p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MyRecomment",
    data(){
        return{
           
        }
    },
    props:{
        title:{
            type:String,
            default:'推荐'
        }
    }
}
</script>

<style lang="less" scoped>
.frame{
    color:white;
    background: -webkit-linear-gradient(#712AD7, #AE24A6); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#712AD7, #AE24A6); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#712AD7, #AE24A6); /* Firefox 3.6 - 15 */
    background: linear-gradient(#712AD7, #AE24A6); /* 标准的语法 */
    h3{
        border-left: 4px solid white;
        font-weight: normal;
        padding-left: 5px;
        
    }
    .model{
        margin: 0 3% 3% 3%;
        overflow: hidden;
        .models{
            text-align: center;
            width: 31%;
            float: left;
            margin: 0 1.1%;
            margin-top: 10px;
            img{
                width: 100%;
                float: left;
            }
            p{
                font-size: 12px;
                text-align: left;
            }
        }
        
    }
}

</style>
