<template>
  <div class="personal_center">
    <div class="background">
      <div class="background_top">
        <i class="iconfont icon-fanhuijiantouxiangqingye" @click="goBack"></i>
      </div>
      <template v-if="data.profile">
        <img :src="data.profile.avatarUrl" alt>
      </template>
      <template v-if="data.profile">
        <p>{{data.profile.nickname}}</p>
      </template>
      <p>
        关注
        <span>100</span>
        粉丝
        <span>10万</span>
      </p>
      <div class="edit">编辑</div>
    </div>
    <div class="tap">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="音乐" name="first">
          <PersonalCenterMusic/>
        </el-tab-pane>
        <el-tab-pane label="动态" name="second">
          <PersonalCenterDynamic/>
        </el-tab-pane>
        <el-tab-pane label="关于我" name="third">
          <PersonalCenterMe/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import PersonalCenterMusic from "../../components/PersonalCenterMusic";
import PersonalCenterDynamic from "../../components/PersonalCenterDynamic";
import PersonalCenterMe from "../../components/PersonalCenterMe";

export default {
  name: "PersonalCenter",
  data() {
    return {
      data: {},
      activeName: "first"
    };
  },
  mounted() {
    let userinfo = window.localStorage.getItem("userinfo");
    if (userinfo) {
      //请求数据
      let uid = JSON.parse(userinfo).userId;
      // console.log(uid);
      this.$axios
        .get("http://localhost:3000/user/detail?uid=" + uid)
        .then(res => {
          // console.log(res);
          this.data = res.data;
        });
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  components: { PersonalCenterMusic, PersonalCenterDynamic, PersonalCenterMe }
};
</script>


<style lang="less" scoped>
.personal_center {
  height: 100%;
  text-align: center;
  .background {
    height: 40%;
    color: #fff;
    background: url("src/assets/images/personal_center_bg.png") no-repeat;
    background-size: cover;
    .background_top {
      i {
        font-size: 24px;
        color: white;
        position: fixed;
        top: 20px;
        left: 10px;
      }
    }
    img {
      width: 70px;
      height: 70px;
      margin-top: 50px;
    }
    p {
      margin: 10px 0;
      font-weight: 100;
    }
    .edit {
      border-radius: 4px;
      border: 1px solid #fff;
      padding: 5px 20px;
      width: 60px;
      margin: 20px auto 0;
    }
  }
}
</style>
<style>
.el-tabs__nav {
  width: 100%;
}
.el-tabs__item {
  width: 33.3%;
  padding: 0;
  font-size: 18px;
}
.el-tabs__item.is-active {
  color: #e41f6e;
}
.el-tabs__active-bar {
  background-color: #e41f6e;
}
.el-tabs__header {
  margin-bottom: 0px;
}
</style>
