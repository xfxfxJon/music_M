<template>
    <div>
        <ul class="MineShow-list">
            <router-link to='mylike'>
                <li>
                    <i>图标</i>
                    <span>
                        我喜欢
                        <i>(0)</i>
                    </span>
                </li>
            </router-link>
            <router-link to='localmusic'>
                <li>
                    <i>图标</i>
                    <span>
                        本地音乐
                        <i>(0)</i>
                    </span>
                </li>
            </router-link>
            <router-link to='recentlyplay'>
                <li>
                    <i>图标</i>
                    <span>
                        最近播放
                        <i>(0)</i>
                    </span>
                </li>
            </router-link>
            <router-link to='dynamic'>
                <li>
                    <i>图标</i>
                    <span>
                        动态
                        <i>(0)</i>
                    </span>
                </li>
            </router-link>
            <router-link to='myradiostation'>
                <li>
                    <i>图标</i>
                    <span>
                        我的电台
                        <i>(0)</i>
                    </span>
                </li>
            </router-link>
            <router-link to='mycollection'>
                <li>
                    <i>图标</i>
                    <span>
                        我的收藏
                        <i>(0)</i>
                    </span>
                </li>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'MineShow',
    data(){
        return{

        }
    }

}
</script>
<style lang="less" scoped>
.MineShow-list{
    width:100%;
    
    background-color: #ffffff;
    li{
        width:100%;
    
        font-size: 18px;
        color:#1f1e1f;
        padding:8px;
        i{
            width:40px;
            height:40px;
            display: inline-block; 
        }
        span{
            width:87%;
            line-height:40px;
            display: inline-block;
            border-bottom:1px solid #CDCDCD;
            i{
                color:#CDCDCD;
                font-size: 16px;
            }
        }
    }
}
</style>


