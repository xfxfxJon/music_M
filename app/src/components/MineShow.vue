<template>
    <div>
        <ul class="MineShow-list">
            <router-link to='mylike'>
                <li>
                    <i class="iconfont">&#xe605;</i>
                    <span>
                        我喜欢
                    </span>
                </li>
            </router-link>
            <router-link to='localmusic'>
                <li>
                    <i class="iconfont">&#xe680;</i>
                    <span>
                        本地音乐
                    </span>
                </li>
            </router-link>
            <router-link to='recentlyplay'>
                <li>
                    <i class="iconfont">&#xe8a3;</i>
                    <span>
                        最近播放
                    </span>
                </li>
            </router-link>
            <router-link to='dynamic'>
                <li>
                    <i class="iconfont">&#xe64f;</i>
                    <span>
                        动态
                    </span>
                </li>
            </router-link>
            <router-link to='myradiostation'>
                <li>
                    <i class="iconfont">&#xe61c;</i>
                    <span>
                        我的电台
                    </span>
                </li>
            </router-link>
            <router-link to='mycollection'>
                <li>
                    <i  class="iconfont">&#xe62e;</i>
                    <span>
                        我的收藏
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


