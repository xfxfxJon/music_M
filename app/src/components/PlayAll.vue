<template>
    <div>
        <ul class="paly">
            <li>
                <img src="../assets/images/bofang.png" alt="">
                <p>&nbsp;&nbsp;播放全部</p>
            </li>
            <li>
                <img src="../assets/images/duoxuan.png" alt="">
                <p>&nbsp;&nbsp;多选</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"PlayAll"
}
</script>

<style lang="less" scoped>
.paly{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #b7b7b7;
    padding: 10px;
    box-sizing: border-box;
    :nth-child(2){
        float: right;
    }
    li{
        float: left;
        line-height: 30px;
        color: black;
        img{
            width: 26px;
        }
    }
    
}
</style>
