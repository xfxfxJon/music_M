<template>
    <div>
        <input class="myinput" type="text" v-model="searchData"  >
        <button @click="clickHandler" class="btn">搜索</button>
    </div>
</template>
<script>
export default {
    name:"SearchInput",
    data(){
        return{
            searchData:""
        }
    },
    watch:{
        searchData(value){
            console.log(value);
        }
    },
    methods:{
        clickHandler(){
            this.$axios.get(this.HOST +"/v1/restserver/ting",{
                params:{
                    method:"baidu.ting.search.catalogSug",
                    query:this.searchData
                }
            }).then(res => { 
                console.log(res.data)
            }).catch(error =>new Error(error))
        }
    }
}
</script>
<style lang="less" scoped>
    .myinput{
        border: 1px solid #fff;
        border-radius: 15px;
        background: #fff;
        width:75%;
        height:25px;
        margin-right:8px;
        padding-left:8px;
    }
   
    .btn{
        background-color: #875af0;
        border:none;
        color:white;
        font-size:16px;
        
    }
</style>

