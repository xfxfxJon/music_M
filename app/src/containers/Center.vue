<template>
  <div class="center_container">
    <div class="center_top">
      <router-link to="/personalCenter" v-if="login">
        <img :src="data.profile.avatarUrl" alt>
        <div class="center_lv">LV.10</div>
        <p class="center_title">{{data.profile.nickname}}</p>
      </router-link>
      <router-link to="/login" v-else>
        <div class="login">
          <div class="center">登录</div>
        </div>
      </router-link>
    </div>
    <ul>
      <li>
        <router-link to="/message">
          <img src="../assets/images/center_message.png" alt>
          <span>我的消息</span>
        </router-link>
      </li>
      <li>
        <router-link to="/vip">
          <img src="../assets/images/center_vip.png" alt>
          <span>会员中心</span>
        </router-link>
      </li>
      <li>
        <router-link to="/shopping">
          <img src="../assets/images/center_shopping.png" alt>
          <span>商城</span>
        </router-link>
      </li>
      <li>
        <router-link to="/friends">
          <img src="../assets/images/center_friend.png" alt>
          <span>我的好友</span>
        </router-link>
      </li>
      <li>
        <router-link to="/nearby">
          <img src="../assets/images/center_nearby.png" alt>
          <span>附近的人</span>
        </router-link>
      </li>
      <li>
        <router-link to="/skin">
          <img src="../assets/images/center_skin.png" alt>
          <span>个性皮肤</span>
        </router-link>
      </li>
      <li>
        <router-link to="/listenMusic">
          <img src="../assets/images/center_recognition.png" alt>
          <span>听歌识曲</span>
        </router-link>
      </li>
      <li @click="showTiming">
        <img src="../assets/images/center_timing.png" alt>
        <span>定时播放</span>
      </li>
      <li>
        <img src="../assets/images/center_night.png" alt>
        <span>夜间模式</span>
      </li>
      <li>
        <router-link to="/settings">
          <img src="../assets/images/center_settings.png" alt>
          <span>设置</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "PersonalCenter",
  data() {
    return {
      data: {},
      login: false,
      isShowTiming: false
    };
  },
  mounted() {
    let userinfo = window.localStorage.getItem("userinfo");
    if (userinfo) {
      //请求数据
      let uid = JSON.parse(userinfo).userId;
      this.$axios
        .get("http://localhost:3000/user/detail?uid=" + uid)
        .then(res => {
          // console.log(res);
          this.data = res.data;
          this.login = true;
        });
    } else {
      this.login = false;
    }
  },
  methods: {
    showTiming() {
      //隐藏侧边栏
      this.$emit("hideCenter", false);
    }
  }
};
</script>

<style lang='less' scoped>
.center_container {
  position: absolute;
  z-index: 888;
  height: 100%;
  width: 33%;
  background: #fff;
}

.login {
  height: 100px;
  .center {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid;
    border-radius: 5px;
    position: relative;
    top: 40px;
  }
}

.center_top {
  background: #6280e6;
  text-align: center;
}
.center_top img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 35px auto 10px;
}
ul {
  clear: both;
}
ul > li {
  text-align: left;
  padding: 15px 0 15px 15px;
}

ul > li img {
  width: 15px;
  /* vertical-align: bottom; */
  position: relative;
  top: -3px;
}

.center_lv {
  border: 1px solid;
  border-radius: 10px;
  font-size: 10px;
  width: 35px;
  margin: 0 auto 10px;
}

.center_title {
  padding-bottom: 10px;
}

.timing_container {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>