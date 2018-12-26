<template>
    <div>
        <img src="../assets/images/hot.png" alt="">
        <i class="ico" @click="$router.back(-1)">icon</i>
        <PlayAll />
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
    left: 20px;
    top: 20px;;
}
</style>
