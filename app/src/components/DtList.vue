<template>
    <div class="frame">
        <div class="model">
            <router-link to="/player">
                <div class="models" v-for="(item,index) in djRadios" :key='index'>
                    <img :src="item.dj.avatarUrl" alt="">
                    <p>{{item.desc}}</p>
                </div>
            </router-link>
           
        </div>
    </div>
</template>

<script>
export default {
    name:"DtList",
    data(){
        return{
            djRadios:[]
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
            this.djRadios = data.data.djRadios;
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
            width: 47%;
            float: left;
            margin: 5px 1.4%;
            img{
                width: 100%;
                float: left;
            }
            p{
                font-size: 0.351111rem;
                width: 100%;
                height: 0.9rem;
                text-align: left;
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
