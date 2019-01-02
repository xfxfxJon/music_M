<template>
    <div class="frame">
        <h3>{{title}}</h3>
        <div class="model">
                <router-link to='/player' v-for="(item,index) in stadio" :key='index'>
                    <div class="models">
                        <img :src='imgUrl' alt="">
                        <p>{{item.name}}</p>
                    </div>
                </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"MyRecomment",
    data(){
        return{
           stadio:[],
           imgUrl:''
        }
    },
    props:{
        title:{
            type:String,
            default:'推荐'
        },
        url:{
            type: String,
            required: true
        }
    },
    mounted(){
        this.$axios
        .get(this.url)
        .then(data => {
            console.log(data.data.result)
            console.log(data.data.result[0].picUrl)
            this.stadio = data.data.result
            this.imgUrl = data.data.result[0].picUrl
        })
        .catch(error => {
            console.log(error);
        });
    }
}
</script>

<style lang="less" scoped>
.frame{
    color:white;
    background: -webkit-linear-gradient(#712AD7, #AE24A6); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#712AD7, #AE24A6); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#712AD7, #AE24A6); /* Firefox 3.6 - 15 */
    background: linear-gradient(#712AD7, #AE24A6); /* 标准的语法 */
    h3{
        border-left: 4px solid white;
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
                color:white;
            }
        }
        
    }
}

</style>
