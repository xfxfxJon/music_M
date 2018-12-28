<template>
  <div>
    <img src="../assets/images/bar.png" alt="">
    <div  class="container">
      <div class="back">
        <i class="iconfont icon-fanhuijiantouxiangqingye" @click="$router.back(-1)"></i>
      </div>
      <div class="content">
        <img src="../assets/images/logo.png" alt="" class="logo">
        <ul class="formlist">
            <li>
                <i class="iconfont icon-shouji"></i>
                <input type="text" placeholder="请输入手机号码" v-model="phone">
            </li>
              <li>
                <i class="iconfont icon-mima"></i>
                <input type="password" placeholder="密码" v-model="password">
            </li>
        </ul>
        <!-- <router-link  to="/"> -->
          <button class="btn" @click="clickHandler">登录</button>
        <!-- </router-link> -->
        <div class="forget">
          <a href="#">忘记密码?</a>
          <router-link to="/register">
            <a href="#">立即注册</a>
          </router-link>
        </div>
        <p v-if="userdata.msg">{{userdata.msg}}</p>
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
  name: 'Relogin',
  data () {
    return {
      phone:"",
      password:"",
      userdata:{}
    }
  },
  methods:{
    clickHandler(){
      if(this.phone && this.password){
        this.$axios.get("http://localhost:3000/login/cellphone",{
            params:{
                    phone:this.phone,
                    password:this.password
            }
        })
        .then(res =>{
          console.log(res)
          this.userdata = res.data
          let data = {"userId":res.data.profile.userId,"nickname":res.data.profile.nickname}
          let userinfo=JSON.stringify(data);
          localStorage.setItem("userinfo",userinfo)
          if(res.data.code == 200){
             this.$router.push({
              name: 'Yinmu'  
            })
          }
        })
        .catch(error =>new Error(error)) 
      } 
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
    width:70%;
    border:solid 1px #875af0;
    border-radius: 20px;
    background-color: white;
    padding:8px 0;
    margin:10px auto 10px;
    font-size: 16px;
    color: #875af0;
  }
  .formlist li{
    width:72%;
    margin:20px auto;
    border-bottom: solid 1px #797979;
  }
   .formlist li i{
    font-size:24px;
    color: #875af0;
    margin-right:8px;
   }
  .content .orther{
    margin:80px 0 10px 0;
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
