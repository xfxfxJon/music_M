<template>
    <div>
        <img src="../assets/images/hot.png" alt="">
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

</style>
