<template>
    <div class="BigList">
        <img src="../assets/images/hot.png" alt="">
        <i class="ico iconfont icon-fanhuijiantouxiangqingye" @click="$router.go(-1)"></i>
        <PlayAll />
        {{this.$route.params.topid}}
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
          list:{}
        }
    },
    components:{
        PlayAll,
        Sing
    },
    mounted() {
        this.$axios.get('http://localhost:3000/toplist',{
            params:{
                id:this.$route.params.topid
            }
        }).then(res =>{
            this.list = res.data.list
        }).catch(res =>{
            console.log(error)
        })
    },
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
