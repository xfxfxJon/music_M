<template>
    <swiper :options='swiperOption'> 
        <swiper-slide v-for='(banner,index) in banners' :key='index'>
            <img class="pics" :src="banner" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name:"Carousel",
    data(){
        return{
            
            swiperOption: {
                autoplay: true,
                pagination: {
                el: ".swiper-pagination"
                },
                loop: true
            }
        }
    },
    props: {
    banners: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pics{
    width: 100%;
}
</style>
