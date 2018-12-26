<template>
    <div class="container">
         <Banner />
         <DongtaiComponent />
         <DongtaiComponent />
         <PlaySongComponent />
    </div>
</template>
<script>
import Banner from '../components/Banner'
import DongtaiComponent from "../components/DongtaiComponent"
import PlaySongComponent from "../components/PlaySongComponent"
export default {
    name:'Dongtai',
    data(){
        return{

        }
    },
    components:{
       Banner ,
       DongtaiComponent,
       PlaySongComponent
    }
}
</script>

<style lang="less" scoped>
    
</style>