<template>
  <div>
    <img src="../assets/images/bar.png" alt="">
    <div  class="container">
      <div class="back">
        <i class="iconfont icon-fanhuijiantouxiangqingye"></i>
      </div>
      <div class="content">
        <img src="../assets/images/logo.png" alt="" class="logo">
        <ul class="formlist">
            <li>
                <i class="iconfont icon-shouji"></i>
                <input type="text" placeholder="请输入手机号码" >
            </li>
              <li>
                <i class="iconfont icon-mima"></i>
                <input type="password" placeholder="密码">
            </li>
        </ul>
        <router-link to="/">
          <button class="btn">登录</button>
        </router-link>
        <div class="forget">
          <a href="#">忘记密码?</a>
          <a href="#">立即注册</a>

        </div>
        <img src="../assets/images/ortherlogin.png" alt="" class="orther">
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
  name: 'Relogin',
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
  .content .btn{
    display: block;
    width:75%;
    border:solid 1px #875af0;
    border-radius: 20px;
    background-color: white;
    padding:10px 0;
    margin:10px auto 10px;
    font-size: 16px;
    color: #875af0;
  }
  .formlist li{
    width:75%;
    margin:20px auto;
    border-bottom: solid 1px #797979;
  }
   .formlist li i{
    font-size:24px;
    color: #875af0;
    margin-right:8px;
   }
  .content .orther{
    width:85%;
    margin-top:80px;
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
   .forget{
     display: flex

   }
   .forget a{
     flex: 1;
     font-size: 12px;
   }
</style>
