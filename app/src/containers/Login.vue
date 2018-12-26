<template>
  <div>
    <img src="../assets/images/bar.png" alt="">
    <div  class="container">
      <div class="back">
        <i class="iconfont icon-fanhuijiantouxiangqingye" @click="$router.back(-1)"></i>
      </div>
      <div class="content">
        <img src="../assets/images/logo.png" alt="" class="logo">
        <router-link to="/relogin">
          <input type="button" value="登录">
        </router-link>
        <router-link to="/register">
           <input type="button" value="注册">
        </router-link>
        <p class="orther">其他登录方式</p>
        <ul class="list">
            <li class="item">
                <div class="circle">
                  <i class="iconfont icon-qq"></i>
                </div>
                <span class="qq">QQ</span>
            </li>
            <li class="item">
                <div class="circle">
                  <i class="iconfont icon-weixin"></i>
                </div>
                <span>微信</span>
            </li>
            <li class="item">
                <div class="circle">
                  <i class="iconfont icon-xinlang"></i>
                </div>
                <span>微博</span>
            </li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>
 
export default {
  name: 'Login',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    padding:10px;
  }
  .back i{
    font-size: 24px;
  }
  .content{
     text-align: center;
  }
  .content .logo{
    width:30%;
    margin:40px 0;
  }
  .content input{
    display: block;
    width:80%;
    border:solid 1px #875af0;
    padding: 10px 0;
    margin: 0 auto 25px auto;
    color: #875af0;
  }
  .content .orther{
    margin:120px 0 10px 0;
  }
  .circle{
    width:50px;
    height:50px;
    border-radius: 50%;
    border:solid 1px #808080;
    margin:10px auto; 
    line-height: 50px;
  }
  .circle i{
    font-size: 28px;
  }
  .item{
    width:30%;
    text-align: center;
  }
   .item span{
     font-size: 14px;
   }
   .item .qq{
     font-size: 16px;
   }
   .list{
     display: flex;
   }
   .list li{
     flex: 1;
   }
</style>
