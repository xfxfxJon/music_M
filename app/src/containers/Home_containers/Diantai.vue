<template>
    <div>
        <!-- 电台页面 -->
        <Banner />
        <Carousel :banners='banners' />
        <List />1
    </div>
</template>

<script>

import Banner from '../../components/Banner'
import Carousel from '../../components/Carousel'
import List from '../../components/List'


export default {
    name:"Diantai",
    data(){
        return{
            banners:[
                require('../../assets/img/banner1.png'),
                require('../../assets/img/banner1.png'),
                require('../../assets/img/banner1.png'),
            ],
        }
    },
    components:{
       Banner,
       Carousel,
       List
    }
}
</script>

<style scoped>

</style>
