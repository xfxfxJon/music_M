<template>
    <div>
        <Return label='最近播放'/>
        <Mymusictabs :value='value' @getIndex='getCurrentIndex'>
            <Mymusictab label='歌曲' index='1'>
                <SongList/>
            </Mymusictab>
            <Mymusictab label='视频' index='2'>
                <NoData/>
            </Mymusictab>
        </Mymusictabs>
        最近播放
    </div>
</template>
<script>
import Return from '../components/Return'
import SongList from '../components/SongList'
import NoData from '../components/NoData'
export default {
    name:'RecentlyPlay',
    data(){
        return{
            value:1

        }
    },
    components:{
        Return,
        SongList,
        NoData
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

