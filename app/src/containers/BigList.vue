<template>
    <div>
        <img src="../assets/images/hot.png" alt="">
        <i class="ico iconfont icon-fanhuijiantouxiangqingye" @click="$router.back(-1)"></i>
        <PlayAll />
        <Sing />
        <Sing />
    </div>
</template>

<script>
import  PlayAll from '../components/PlayAll'
import  Sing from '../components/Sing'

export default {
    name:"BigList",
    data(){
        return{
           
        }
    },
    components:{
        PlayAll,
        Sing
    }
}
</script>

<style lang="less" scoped>
img{
    width: 100%;
}
.ico{
    position: absolute;
    left: 10px;
    top: 20px;
    color: white;
    font-size: 34px;
}
</style>
