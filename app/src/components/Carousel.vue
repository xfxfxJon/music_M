<template>
    <swiper :options='swiperOption'> 
        <swiper-slide v-for='(item,index) in banners' :key='index'>
            <img class="pics" :src="item.picUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name:"Carousel",
    data(){
        return{
            banners:[],
            swiperOption: {
                autoplay: true,
                pagination: {
                el: ".swiper-pagination"
                },
                loop: true
            }
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
            this.banners=data.data.banners
        })
        .catch(error => {
            console.log(error)
        })
    },

}
</script>

<style lang="less" scoped>
.pics{
    width: 100%;
    height: 150px;
}
</style>
