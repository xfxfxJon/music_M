<template>
    <div>
        <h3 class="top">音沐音乐官方榜</h3>
        <div class="dt_list">
            <img src="../assets/images/bang.png" alt="">
            <ul>
                <li>1.圣诞夜 - 朱星杰</li>
                <li>2.我要给世界最悠长的湿吻 - 蔡健雅</li>
                <li>3.雾霭有时晴 - 河图/音频怪物</li>
            </ul>
        </div>
        <div class="dt_list">
            <img src="../assets/images/bang.png" alt="">
            <ul>
                <li>1.圣诞夜 - 朱星杰</li>
                <li>2.我要给世界最悠长的湿吻 - 蔡健雅</li>
                <li>3.雾霭有时晴 - 河图/音频怪物</li>
            </ul>
        </div>
        <div class="dt_list">
            <img src="../assets/images/bang.png" alt="">
            <ul>
                <li>1.圣诞夜 - 朱星杰</li>
                <li>2.我要给世界最悠长的湿吻 - 蔡健雅</li>
                <li>3.雾霭有时晴 - 河图/音频怪物</li>
            </ul>
        </div>
        <div class="dt_list">
            <img src="../assets/images/bang.png" alt="">
            <ul>
                <li>1.圣诞夜 - 朱星杰</li>
                <li>2.我要给世界最悠长的湿吻 - 蔡健雅</li>
                <li>3.雾霭有时晴 - 河图/音频怪物</li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"TopList"
}
</script>

<style lang="less" scoped>
.top{
    font-weight: normal;
    font-size: 18px;
    margin: 10px 0;
}
.dt_list{
    // margin:3% ;
    width: 100%;
    height: 120px;
    overflow: hidden;
    padding: 3%;
    box-sizing: border-box;
    border-bottom: 1px solid #f1f3f4;
    img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
        float: left;
        margin-left: 10px;
    }
    ul{
        float: left;
        margin-left: 10px;
        li{
            font-size: 12px;
            color: #676768;
            line-height: 30px;
        } 
    }
}
</style>
