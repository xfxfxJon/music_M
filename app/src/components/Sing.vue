<template>
    <div>
        <router-link to="/player">
            <div class="dt_list">
            <p class="num">1</p>
            <ul>
                <li>小宇</li>
                <li><span>SQ</span>网瘾少女大叽叽</li>
            </ul>
            <span>···</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Sing",
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
.dt_list{
    // margin:3% ;
    width: 100%;
    height: 55px;
    overflow: hidden;
    padding: 3%;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    span{
        font-size: 30px;
        float: right;
        
    }
    .num{
        color: #aa24a9;
        font-weight: 600;
        float: left;
        line-height: 30px;
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
            color: black;
        }
        :nth-child(2){
                font-size: 12px!important;
            }
        li{
            font-size: 14px;
            color: #6a6a6a;
            line-height: 19px;
            span{
                border: 1px solid #aa24a9;
                color: #aa24a9!important;
                border-radius: 5px;
                font-size: 12px;
                margin-right: 5px;
                float: left;
                height: 15px;
            }
        }
    }
}
</style>
