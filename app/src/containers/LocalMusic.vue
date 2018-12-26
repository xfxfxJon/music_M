<template>
    <div>
        <Return label='本地音乐'/>
        <Mymusictabs :value='value' @getIndex='getCurrentIndex'>
            <Mymusictab label='我的下载' index='1'>
                <h3>内容一</h3>
            </Mymusictab>
            <Mymusictab label='本地播放' index='2'>
                <h3>内容2</h3>
            </Mymusictab>
            <!-- <Mymusictab label='专辑' index='3'>
                <h3>内容3</h3>
            </Mymusictab>
            <Mymusictab label='文件夹' index='4'>
                <h3>内容4</h3>
            </Mymusictab> -->
        </Mymusictabs>
    
        本地音乐
    </div>
</template>
<script>
import Return from '../components/Return'
export default {
    name:'LocalMusic',
    data(){
        return{
            value:1
        }
    },
    methods:{
        getCurrentIndex(value){
            this.value = value;
        }
    },
    components:{
        Return
    }
}
</script>

<style lang="less" scoped>

</style>

