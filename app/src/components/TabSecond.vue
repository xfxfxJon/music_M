<template>
    <div>
        <tabs :value='value' @getIndex="getCurrentIndex">
            <tab label='电台分类' index='1'></tab>
            <tab label='电台排行' index='2'></tab>
        </tabs>
    </div>
</template>

<script>
export default {
    name:"List",
    data(){
        return{
            value:1,
        }
    },
    methods: {
        getCurrentIndex(index){
            this.value = index;
        }
    },
}
</script>

<style lang="less" scoped>

</style>
