<template>
    <div>
        <Return label='本地音乐'/>
        <Mymusictabs :value='value' @getIndex='getCurrentIndex'>
            <Mymusictab label='本地播放' index='1'>
                <SongList :url="'http://localhost:3000/song/detail'" :params="LocalParams"/>
            </Mymusictab>
            <Mymusictab label='我的下载' index='2'>
                <NoData/>
            </Mymusictab>
        </Mymusictabs>
    </div>
</template>
<script>
import Return from '../components/Return'
import SongList from '../components/SongList'
import NoData from '../components/NoData'
export default {
    name:'LocalMusic',
    data(){
        return{
            value:1,
            LocalParams:{
                ids:74625
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
        NoData
    }
}
</script>

<style lang="less" scoped>

</style>

