<template>
    <div class="frame">
        <div class="model">
            <router-link to="/player">
                <div class="models">
                    <img src="../assets/images/boy.png" alt="">
                    <p>声控特辑|性感男声 开口即心动</p>
                </div>
            </router-link>
            <router-link to="/player">
                <div class="models">
                    <img src="../assets/images/girl.png" alt="">
                    <p>你的青春有没有属于你的一首歌</p>
                </div>
            </router-link>    
        </div>
    </div>
</template>

<script>
export default {
    name:"DtList"
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
            width: 47%;
            float: left;
            margin: 0 1.4%;
            img{
                width: 100%;
                float: left;
            }
            p{
                // font-size: 12px;
                text-align: left;
            }
        }
        
    }
}

</style>
