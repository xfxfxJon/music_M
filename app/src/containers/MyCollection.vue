<template>
    <div>
        <Return label='我的收藏'/>
        <Mymusictabs :value='value' @getIndex='getCurrentIndex'>
            <Mymusictab label='音乐' index='1'>
                <SongList :url="'http://localhost:3000/song/detail'" :params="LocalParams"/>
            </Mymusictab>
            <Mymusictab label='MV' index='2'>
                <NoData2/>
                <MyRecomment v-bind:title="title" :url="'http://localhost:3000/personalized/mv'"/>
            </Mymusictab>
            <Mymusictab label='歌单' index='3'>
                <SongList :url="'http://localhost:3000/song/detail'" :params="LocalParams"/>
            </Mymusictab>
            <Mymusictab label='专辑' index='4'>
                <NoData2/>
                <MyRecomment v-bind:title="title2" :url="'http://localhost:3000/personalized'"/>
            </Mymusictab>
        </Mymusictabs>
        我的收藏
    </div>
</template>
<script>
import Return from '../components/Return'
import SongList from '../components/SongList'
import NoData2 from '../components/NoData2'
import NoData from '../components/NoData'
import MyRecomment from '../components/MyRecomment'
export default {
    name:'MyCollection',
    data(){
        return{
            value:1,
            title:'推荐MV',
            title2:'推荐专辑',
            LocalParams:{
                ids:74625
            }
        }
    },
    components:{
        Return,
        SongList,
        NoData2,
        NoData,
        MyRecomment
    },
     methods:{
        getCurrentIndex(value){
            this.value = value;
        }
    }
}
</script>

<style lang="less" scoped>

</style>

