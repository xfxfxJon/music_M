<template>
    <div>
        <!-- 推荐页面 -->
        <!-- 导航部分 -->
        <Banner />
        <!-- tab部分 -->
        <tabs :value='value' @getIndex="getCurrentIndex">
            <tab label='推荐' index='1'>
               <Carousel :banners='banners' />
               <List />
               <Frame />
            </tab>
            <tab label='榜单' index='2'>
                <!-- 待用 -->
                <TopList />
            </tab>
            <tab label='电台' index='3'>
                <Carousel :banners='banners1' />
                <TabSecond />
                
            </tab>
            <tab label='专辑' index='4'>
                <Carousel :banners='banners2' />
            </tab>
        </tabs>
        
         
    </div>
</template>

<script>

import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import List from '../components/List'
import Frame from '../components/Frame'
import TabSecond from '../components/TabSecond'
import TopList from '../components/TopList'

export default {
    name:"Yinmu",
    data(){
        return{
            value:1,
            banners:[
                require('../assets/images/banner1.png'),
                require('../assets/images/banner1.png'),
                require('../assets/images/banner1.png'),
            ],
            banners1:[
                require('../assets/images/banner2.png'),
                require('../assets/images/banner2.png'),
                require('../assets/images/banner2.png'),
            ],
            banners2:[
                require('../assets/images/banner3.png'),
                require('../assets/images/banner3.png'),
                require('../assets/images/banner3.png'),
            ],
        }
    },
    components:{
        Banner,
        Carousel,
        List,
        Frame,
        TabSecond,
        TopList,
    },
    methods: {
        getCurrentIndex(index){
            this.value = index;
        }
    },
}
</script>

<style scoped>

</style>
