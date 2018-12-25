<template>
    <div>
        <div class="nav">
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
        </div>
        <!-- <div class="iocns">
            <i class="icon left_ico">图标</i>
            <i class="icon right_ico">图标</i>
        </div> -->
        
        <div class="menu">
            <ul>

            </ul>
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
    left: 20 / 28rem;
    top: 28 / 28rem;
    
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
        // color: rgba(255,255,255,.5)
    }
    .active{
        color: white;
    }
}
</style>

