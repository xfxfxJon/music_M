<template>
    <div>
        <Return label='最近播放'/>
        <Mymusictabs :value='value' @getIndex='getCurrentIndex'>
            <Mymusictab label='歌曲' index='1'>
                <SongList :url="'http://localhost:3000/song/detail'" :params="LocalParams"/>
            </Mymusictab>
            <Mymusictab label='视频' index='2'>
                <Myvideo :url="'http://localhost:3000/video/detail'" :params="VideoParams"/>
            </Mymusictab>
        </Mymusictabs>
    </div>
</template>
<script>
import Return from '../components/Return'
import SongList from '../components/SongList'
import Myvideo from '../components/Myvideo'
export default {
    name:'LocalMusic',
    data(){
        return{
            value:1,
            LocalParams:{
                ids:74625
            },
            VideoParams:{
                id:'89ADDE33C0AAE8EC14B99F6750DB954D'
            }
        }
    },
    methods:{
        getCurrentIndex(value){
            this.value = value;
        }
    },
    components:{
        Return,
        SongList,
        Myvideo
    }
}
</script>

<style lang="less" scoped>

</style>

