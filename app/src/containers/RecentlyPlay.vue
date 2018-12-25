<template>
    <div>
        <Mymusictabs :value='value' @getIndex='getCurrentIndex'>
            <Mymusictab label='歌曲' index='1'>
                <h3>内容一</h3>
            </Mymusictab>
            <Mymusictab label='视频' index='2'>
                <h3>内容2</h3>
            </Mymusictab>
        </Mymusictabs>
        最近播放
    </div>
</template>
<script>
export default {
    name:'RecentlyPlay',
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

