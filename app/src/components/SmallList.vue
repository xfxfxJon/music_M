<template>
    <div>
        <div>
            <router-link to="/biglist">
                <div class="dt_list" v-for="(item,index) in playlists" :key='index' >
                <img :src="item.coverImgUrl" alt="">
                <ul>
                    <li>{{item.name}}</li>
                    <li>by {{item.creator.nickname}}</li>
                    <li>{{item.copywriter}}</li>
                </ul>
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"SmallList",
    data(){
        return{
           playlists:[]
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
        this.playlists=data.data.playlists
    })
    .catch(error => {
        console.log(error)
    })
    },
}
</script>

<style lang="less" scoped>
.dt_list{
    width: 100%;
    height: 140px;
    overflow: hidden;
    padding: 3% 3% 0 2%;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    img{
        width: 127px;
        height: 127px;
        float: left;
    }
    ul{
        width: 205px;
        float: left;
        margin-left: 10px;
        :nth-child(1){
            font-size: 17px;
            color: #323233;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis;
            margin-top: 16px;
        }
        :nth-child(2){
            font-size: 12px;
            color: #7d7d7e;
            margin: 16px 0;
        }
        :nth-child(3){
            font-size: 12px;
            color: #969798;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis;
        }
    }
}
</style>
