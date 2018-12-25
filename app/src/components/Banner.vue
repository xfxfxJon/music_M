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
            <router-link to='/search'>
            <i class="iconfont right_ico">
                <img src="../assets/images/fdj.png" alt="">
            </i>
            </router-link>
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
// .left_ico{
//     position: absolute;
//     left: 17px;
//     top: 23px;
    
// }
.right_ico img{
   width: 20px;
   height: 20px;
   position: absolute;
   right: 21px;
   top: 22px;
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

