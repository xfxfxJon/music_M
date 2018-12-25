<template>
    <div class="frame">
        <h3>推荐</h3>
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
    name:"Frame",
    data(){
        return{
           
        }
    }
}
</script>

<style lang="less" scoped>
.frame{
    margin-top: 20px;
    h3{
        border-left: 4px solid #9847a1;
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
