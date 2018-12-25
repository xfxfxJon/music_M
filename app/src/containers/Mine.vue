<template>
    <div>
        <Banner />
        <MineShow/>

    </div>
</template>

<script>

import Banner from '../components/Banner'
import MineShow from '../components/MineShow'
import Recomment from '../components/Recomment'

export default {
    name:"Mine",
    data(){
        return{

        }
    },
    components:{
        Banner,
        MineShow,
        Recomment
    }
}
</script>

<style scoped>

</style>
