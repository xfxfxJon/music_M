<template>
    <div>
        <Return label='我的收藏'/>
        <Mymusictabs :value='value' @getIndex='getCurrentIndex'>
            <Mymusictab label='音乐' index='1'>
                <h3>内容一</h3>
            </Mymusictab>
            <Mymusictab label='MV' index='2'>
                <h3>内容2</h3>
            </Mymusictab>
            <Mymusictab label='歌单' index='3'>
                <h3>内容3</h3>
            </Mymusictab>
            <Mymusictab label='专辑' index='4'>
                <h3>内容4</h3>
            </Mymusictab>
        </Mymusictabs>
        我的收藏
    </div>
</template>
<script>
import Return from '../components/Return'
export default {
    name:'MyCollection',
    data(){
        return{
            value:1
        }
    },
    components:{
        Return
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

