<template>
    <div>
        <Return label='我的电台'/>
        <NoData2/>
        <MyRecomment v-bind:title="title" :url="'http://localhost:3000/personalized/djprogram'" />
    </div>
</template>
<script>
import Return from '../components/Return'
import NoData2 from '../components/NoData2'
import MyRecomment from '../components/MyRecomment'
export default {
    name:'MyRadioStation',
    data(){
        return{
            title:'推荐电台'
        }
    },
    components:{
        Return,
        NoData2,
        MyRecomment
    }
}
</script>

<style lang="less" scoped>

</style>

