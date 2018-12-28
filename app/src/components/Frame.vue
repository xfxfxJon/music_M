<template>
    <div class="frame">
        <h3>推荐</h3>
        <div class="model">
            <router-link to='/biglist'>
                <div class="models" v-for="(item,index) in result" :key='index' >
                    <img :src="item.picUrl" alt="">
                    <p>{{item.name}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Frame",
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
        // console.log(data.data)
        this.result = data.data.result.slice(0,6)
    })
    .catch(error => {
        console.log(error)
    })
    },
}
</script>

<style lang="less" scoped>
.frame{
    margin-top: 20px;
    h3{
        border-left: 4px solid #9847a1;
        font-weight: normal;
        padding-left: 5px;
        
    }
    .model{
        margin: 0 3% 3% 3%;
        overflow: hidden;
        .models{
            text-align: center;
            width: 31%;
            float: left;
            margin: 0 1.1%;
            margin-top: 10px;
            img{
                width: 100%;
                float: left;
            }
            p{
                font-size: 12px;
                text-align: left;
                width: 100%;
                height: 0.9rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        
    }
}

</style>
