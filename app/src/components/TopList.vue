<template>
    <div>
        <h3 class="top">{{title}}</h3>
        
        <div class="dt_list" >
            <router-link :to="{name:'BigList',params:{topid:data.id}}">
            <img :src="data.coverImgUrl" alt="">
                <ul>
                <li v-for="(item,index) in tracks " :key='index'>{{ index+1+ "."+item.name }} - {{ item.ar[0].name }}</li>
                </ul> 
            </router-link>
        </div>
    
    </div>
</template>

<script>
export default {
    name:"TopList",
    data(){
        return{
            data:{},
            tracks:{},
        }
    },
    methods: {
        
    },
    props:{
        title:'',
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
            // console.log(data.data)
            this.data=data.data.playlist
            // data.data.playlist.tracks.length=3
            this.tracks=data.data.playlist.tracks.slice(0,3)
        })
        .catch(error => {
            console.log(error)
        })
    },


}
</script>

<style lang="less" scoped>
.top{
    font-weight: normal;
    font-size: 18px;
    margin: 10px 0;
}
.dt_list{
    // margin:3% ;
    width: 100%;
    height: 120px;
    overflow: hidden;
    padding: 3%;
    box-sizing: border-box;
    border-bottom: 1px solid #f1f3f4;
    img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
        float: left;
        margin-left: 10px;
    }
    ul{
        float: left;
        margin-left: 10px;
        li{
            font-size: 12px;
            color: #676768;
            line-height: 30px;
        } 
    }
}
</style>
