<template>
    <div>
        <!-- 电台排行 -->
            <p>最近更新：12月25日</p>
            <!-- 列表 -->
            <router-link to="player">
                <div class="dt_list" v-for="(item,index) in result" :key='index'>
                <p class="num">{{ index+1+'' }}</p>
                <img :src="item.picUrl" alt="">
                <ul>
                    <li>{{item.name}}</li>
                    <li>{{item.program.mainSong.artists[0].name}}</li>
                    <li><span class="iconfont">hot </span> {{item.program.duration}}</li>
                </ul>
            </div>
            </router-link>
    </div>
</template>

<script>
export default {
    name:"DtTop",
    data(){
        return{
            result:[]
        }
    },
    props:{
        params:{
            type:Object,
            require:true
        },
        url:{
            type:String,
            require:true
        }
    },
    mounted() {
        this.$axios.get(this.url,{
            params:this.params
        })
        .then(data => {
            console.log(data.data)
            this.result = data.data.result;
        })
        .catch(error => {
            console.log(error)
        })
    },
}
</script>

<style lang="less" scoped>
.dt_list{
    // margin:3% ;
    width: 100%;
    height: 80px;
    overflow: hidden;
    padding: 3% 3% 0 3%;
    box-sizing: border-box;
    .num{
        color: #aa24a9;
        font-weight: 600;
        float: left;
        line-height: 70px;
    }
    img{
        width: 70px;
        height: 70px;
        border-radius: 10px;
        float: left;
        margin-left: 10px;
    }
    ul{
        float: left;
        margin-left: 10px;
        :nth-child(1){
            font-size: 16px;
            color: #323233;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        :nth-child(2){
            font-size: 12px;
            color: #7d7d7e;
            margin: 5px 0;
        }
        :nth-child(3){
            font-size: 12px;
            color: #969798;
            span{
                color: #aa24a9;
                font-size: 12px;
                display: inline-block
            }
        }
    }
}
</style>
