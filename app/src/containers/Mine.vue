<template>
    <div>
        <Banner />
        <MineShow/>
        <Frame/>
        

    </div>
</template>

<script>

import Banner from '../components/Banner'
import MineShow from '../components/MineShow'
import Recomment from '../components/Recomment'
import Frame from '../components/Frame'

export default {
    name:"Mine",
    data(){
        return{

        }
    },
    components:{
        Banner,
        MineShow,
        Recomment,
        Frame
    }
}
</script>

<style scoped>

</style>
