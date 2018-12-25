<template>
    <div>
        <ul class="icon_list">
            <li>
                <img class="list_img" src="../assets/images/tj.png" alt="">
                <p>每日推荐</p>
            </li>
            <li class=" img_one">
                <img class="list_img" src="../assets/images/reb.png" alt="">
                <p>音沐热歌榜</p>
            </li>
            <li>
                <img class="list_img" src="../assets/images/party.png" alt="">
                <p>音乐Party</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"List"
}
</script>

<style lang="less" scoped>
.list_img{
    width: 50px;
}
.img_one{
    width: 120px;
    // padding-top: 20px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}
.icon_list{
    display: flex;
    margin-top: 10px;
    li{
        flex: 1;
        text-align: center;
        float: left;
        list-style: none;
        p{
            font-size: 18px;
        }
    }
}
</style>
