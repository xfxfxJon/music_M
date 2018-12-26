<template>
    <div>
        <div>
            <router-link to="/biglist">
                <div class="dt_list">
                <img src="../assets/images/music_header.png" alt="">
                <ul>
                    <li>[小酒馆]剑与魔法·旅途中的休憩时光</li>
                    <li>by 花嫁赫萝</li>
                    <li>献给每一位离家的游人、荆棘路中的求道者、远行于荒野之上的冒险家</li>
                </ul>
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"SmallList"
}
</script>

<style lang="less" scoped>
.dt_list{
    width: 100%;
    height: 140px;
    overflow: hidden;
    padding: 3% 3% 0 2%;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    img{
        width: 127px;
        height: 127px;
        float: left;
    }
    ul{
        width: 250px;
        float: left;
        margin-left: 10px;
        :nth-child(1){
            font-size: 17px;
            color: #323233;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis;
            margin-top: 16px;
        }
        :nth-child(2){
            font-size: 12px;
            color: #7d7d7e;
            margin: 16px 0;
        }
        :nth-child(3){
            font-size: 12px;
            color: #969798;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis;
        }
    }
}
</style>
