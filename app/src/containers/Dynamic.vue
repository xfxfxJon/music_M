<template>
    <div>
        <Return label='我的动态'/>
        <MyDynamic/>
    </div>
</template>
<script>
import Return from '../components/Return'
import MyDynamic from '../components/MyDynamic'
export default {
    name:'Dynamic',
    data(){
        return{

        }
    },
    components:{
        Return,
        MyDynamic
        
    }
}
</script>

<style lang="less" scoped>

</style>

