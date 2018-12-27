<template>
    <div>
        <!-- 电台排行 -->
            <p>最近更新：12月25日</p>
            <!-- 列表 -->
            <router-link to="player">
                <div class="dt_list">
                <p class="num">1</p>
                <img src="../assets/images/singer.png" alt="">
                <ul>
                    <li>小宇</li>
                    <li>网瘾少女大叽叽</li>
                    <li><span class="hot"><i class="iconfont">&#xe737;</i>&nbsp;</span>223272</li>
                </ul>
            </div>
            </router-link>
            <router-link to="player">
                <div class="dt_list">
                <p class="num">1</p>
                <img src="../assets/images/singer.png" alt="">
                <ul>
                    <li>小宇</li>
                    <li>网瘾少女大叽叽</li>
                    <li><span class="hot"><i class="iconfont">&#xe737;</i>&nbsp;</span>223272</li>
                </ul>
            </div>
            </router-link>
            <router-link to="player">
                <div class="dt_list">
                <p class="num">1</p>
                <img src="../assets/images/singer.png" alt="">
                <ul>
                    <li>小宇</li>
                    <li>网瘾少女大叽叽</li>
                    <li><span class="hot"><i class="iconfont">&#xe737;</i>&nbsp;</span>223272</li>
                </ul>
            </div>
            </router-link>
    </div>
</template>

<script>
export default {
    name:"DtTop"
}
</script>

<style lang="less" scoped>
.dt_list{
    // margin:3% ;
    width: 100%;
    height: 80px;
    overflow: hidden;
    padding: 3%;
    box-sizing: border-box;
    .num{
        color: #aa24a9;
        font-weight: 600;
        float: left;
        line-height: 70px;
    }
    img{
        width: 70px;
        height: 70px;
        border-radius: 10px;
        float: left;
        margin-left: 10px;
    }
    ul{
        float: left;
        margin-left: 10px;
        :nth-child(1){
            font-size: 17px;
            color: #323233;
        }
        :nth-child(2){
            font-size: 12px;
            color: #7d7d7e;
            margin: 5px 0;
        }
        :nth-child(3){
            font-size: 12px;
            color: #969798;
            .hot i{
                color: #aa24a9;
                font-size: 17px;
            }
        }
    }
}
</style>
