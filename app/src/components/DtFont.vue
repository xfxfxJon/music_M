<template>
    <div>
        <h3>热门分类</h3>
        <ul class="font">
            <li>
                <i class="iconfont">&#xe60f;</i>&nbsp;
                <span>有声书&nbsp;&nbsp; </span>
            </li>
            <li>
                <i class="iconfont">&#xe61c;</i>
                <span>知识技能</span>
            </li>
            <li>
                <i class="iconfont">&#xe604;</i>
                <span>商业财经</span>
            </li>
            <li>
                <i class="iconfont">&#xe7ff;</i>&nbsp;&nbsp;
                <span>3D|电子</span>
            </li>
            <li>
                <i class="iconfont">&#xe7b7;</i>
                <span>外语世界</span>
            </li>
            <li>
                <i class="iconfont">&#xe62f;</i>
                <span>亲子宝贝</span>
            </li>
            
        </ul>
        <h3 class="second">更多分类</h3>
        <ul class="font">
            <li>
                <i class="iconfont">&#xe618;</i>
                <span>创作|翻唱</span>
            </li>
            <li>
                <i class="iconfont">&#xe613;</i>
                <span>音乐故事</span>
            </li>
            
            <li>
                <i class="iconfont">&#xe655;</i>
                <span>旅途|城市</span>
            </li>
            <li>
                <i class="iconfont">&#xe61f;</i>
                <span>相声曲艺</span>
            </li>
            <li>
                <i class="iconfont">&#xe617;</i>
                <span>情感调频</span>
            </li>
            <li>
                <i class="iconfont">&#xe645;</i>
                <span>美文读物</span>
            </li>
            <li>
                <i class="iconfont">&#xe63a;</i>
                <span>听广播剧</span>
            </li>
            <li>
                <i class="iconfont">&#xe612;</i>
                <span>明星主播</span>
            </li>
            <li>
                <i class="iconfont">&#xe62e;</i>
                <span>科技科学</span>
            </li>
            <li>
                <i class="iconfont">&#xe601;</i>
                <span>校园|教育</span>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name:"DtFont"
}
</script>

<style lang="less" scoped>
h3{
    text-align: center;
    margin: 20px 0 10px;
    font-weight: normal;
    font-size: 18px;
    color: black;
}
.second{
    margin-top: 30px;
}
.font{
    :nth-child(1),:nth-child(2),:nth-child(5),:nth-child(6){
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-width: 1px;
        }
    :nth-child(7),:nth-child(8){
         border-bottom: 1px solid #ddd;
    }
        overflow: hidden;
    li{
        float: left;
        width: 46%;
        height: 37px;
        line-height: 37px;
        text-align: center;
        padding: 5px;
        color: black;
        
        
        i{
            color: #bd2727;
            border: none!important;
            // border-left: 1px solid #ddd!important;
        }
        span{
            border: none!important;
        }
    }
}
</style>
