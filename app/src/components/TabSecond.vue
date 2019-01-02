<template>
    <div>
        <tabs :value='value' @getIndex="getCurrentIndex">
            <tab label='电台分类' index='1'>
                <!-- <DtFont />  模仿网易云 -->
                <!-- <DtList :url="'http://localhost:3000/dj/recommend'" /> -->
                <DtList :url="'http://localhost:3000/dj/recommend/type?type=2'" />
            </tab>
            <tab label='电台排行' index='2'>
                <DtTop :url="'http://localhost:3000/personalized/djprogram'" />
            </tab>
        </tabs>
    </div>
</template>

<script>
import DtTop from './DtTop'
// import DtFont from './DtFont'
import DtList from './DtList'

export default {
    name:"List",
    data(){
        return{
            value:1,
        }
    },
    methods: {
        getCurrentIndex(index){
            this.value = index;
        }
    },
    components:{
        DtTop,
        DtList
        // DtFont
    }
}
</script>

<style lang="less" scoped>

</style>
