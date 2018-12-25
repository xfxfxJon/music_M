<template>
    <div>
        <div class="nav">
            <!-- <div class="iocns"> -->
                <i class="iconfont left_ico"></i>
            <!-- </div> -->
            <ul class="list">
            <router-link to='/' exact >
                <li>音沐</li>
            </router-link>
            <router-link to='/mine'>
                <li>我的</li>
            </router-link>
            <router-link to='/dongtai'>
                <li>动态</li>
            </router-link>
        </ul>
            <i class="icon right_ico">图标</i>
        </div>
        
    </div>
</template>

<script>

export default {
    name:'Banner',
    data(){
        return{
          
        }
    }
}
</script>

<style lang="less" scoped>

.nav{
    width: 100%;
    height: 64px;
    background-image: url('../assets/images/top.png')
}
.left_ico{
    position: absolute;
    left: 17px;
    top: 23px;
    
}
.right_ico{
    position: absolute;
    right: 30 / 28rem;
    top: 14 / 28rem; 
}
.list{
    width: 204px;;
    line-height: 64px;
    margin: 0 auto;
    li{
        list-style: none;
        float: left;
        margin: 0 14px;
        font-size: 20px;
        // opacity: .9;
    }
    .active{
        color: white;
    }
}
</style>

