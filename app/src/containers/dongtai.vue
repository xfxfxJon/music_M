<template>
    <div>
         <Banner />
         <DongtaiComponent />
    </div>
</template>
<script>
import Banner from '../components/Banner'
import DongtaiComponent from "../components/DongtaiComponent"
export default {
    name:'Dongtai',
    data(){
        return{

        }
    },
    components:{
       Banner ,
       DongtaiComponent
    }
}
</script>

<style lang="less" scoped>

</style>