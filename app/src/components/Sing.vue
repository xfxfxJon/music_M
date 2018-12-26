<template>
    <div class="music_box">
        <span>1</span>
        <ul class="music">
            <li>我的一个道姑朋友</li>
            <li>以冬</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Sing"
}
</script>

<style lang="less" scoped>
.music_box{
    width: 100%;
    height: 50px;
    // padding: 10px;
    // box-sizing: border-box;
    span{
        line-height: 50px,
    }
    .music{
        border-bottom: 1px solid #f0f0f0;
    
        li{
            margin-left: 20px;
            font-size: 12px;
        }
}
}
</style>
