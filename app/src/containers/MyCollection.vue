<template>
    <div>
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
export default {
    name:'MyCollection',
    data(){
        return{
            value:1
        }
    },
    components:{
        
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

