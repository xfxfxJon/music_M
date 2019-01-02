<template>
    <div class="box">
        <div class='inner_box'>
            
            <video ref='video_url' controls="controls" class="myVideo">
            您的浏览器不支持 video 标签。
            </video>
        </div> 
    </div>
</template>
<script>
export default {
    name:'Myvideo',
    data(){
        return{
            video_url:'',
            
        }
    },
    props: {
        url: {
        type: String,
        required: true
        },
        params: {
        type: Object,
        required: true
        }
    },
    mounted(){
        this.$axios
        .get(this.url, {
            params: this.params
        })
        .then(data => {
            console.log(data.data.urls[0].url)
            // this.videos = data.data.urls[0].url;
            this.$refs.video_url.src = data.data.urls[0].url
        })
        .catch(error => {
            console.log(error);
        });
    }
}
</script>
<style lang="less" scoped>
.box{
    .inner_box{
        .myVideo{
            width:100%;
        }
    }
}
</style>


