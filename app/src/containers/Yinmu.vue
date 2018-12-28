<template>
    <div>
        <!-- 推荐页面 -->
        <!-- 导航部分 -->
        <Banner />
        <!-- tab部分 -->
        <tabs :value='value' @getIndex="getCurrentIndex">
            <tab label='推荐' index='1'>
               <Carousel :url="'http://localhost:3000/banner'"  />
               <List />
               <Frame :url="'http://localhost:3000/personalized'" />
            </tab>
            <tab label='榜单' index='2'>
                <!-- 待用 -->
                <TopList :title="tltle" :params='params0' :url="'http://localhost:3000/top/list'" />
                <TopList :params='params1' :url="'http://localhost:3000/top/list'" />
                <TopList :params='params2' :url="'http://localhost:3000/top/list'" />
                <TopList :params='params3' :url="'http://localhost:3000/top/list'" />
                <TopList :params='params4' :url="'http://localhost:3000/top/list'" />
            </tab>
            <tab label='电台' index='3'>
                <Carousel :url="'http://localhost:3000/banner'"  />
                <!-- 这是网易云电台  待用  -->
                <TabSecond /> 
                
            </tab>
            <tab label='歌单' index='4'>
                <SongSheet />
                <SmallList :url="'http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=10'" />
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
import SongSheet from '../components/SongSheet'
import SmallList from '../components/SmallList'
import DtList from '../components/DtList'

export default {
    name:"Yinmu",
    data(){
        return{
            tltle:"音沐官方音乐榜",
            value:1,
            // banners:[
            //     require('../assets/images/banner1.png'),
            //     require('../assets/images/banner1.png'),
            //     require('../assets/images/banner1.png'),
            // ],
            // banners1:[
            //     require('../assets/images/banner3.png'),
            //     require('../assets/images/banner3.png'),
            //     require('../assets/images/banner3.png'),
            // ],
            // banners2:[
            //     require('../assets/images/banner3.png'),
            //     require('../assets/images/banner3.png'),
            //     require('../assets/images/banner3.png'),
            // ],
            params0:{
                idx:0,
            },
            params1:{
                idx:1
            },
            params2:{
                idx:2
            },
            params3:{
                idx:3
            },
            params4:{
                idx:4
            },
        }
    },
    components:{
        Banner,
        Carousel,
        List,
        Frame,
        TabSecond,
        TopList,
        SongSheet,
        SmallList,
        DtList
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
