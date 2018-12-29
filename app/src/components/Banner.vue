<template>
  <div class="banner">
    <transition name="showcenter">
      <PersonalCenter v-show="isShowCenter" @hideCenter="hideCenter"/>
    </transition>
    <TimingComponent v-if="isShowTiming" @hideTiming="hideTiming"/>
    <div
      class="shadow"
      v-show="isShowCenter || isShowTiming"
      @click="isShowCenter = false;isShowTiming = false;"
    ></div>
    <div class="nav">
      <img
        src="../assets/images/header_list.png"
        alt
        class="header_list"
        @click="isShowCenter = true"
      >
      <ul class="list">
        <router-link to="/" exact>
          <li>音沐</li>
        </router-link>
        <router-link to="/mine">
          <li>我的</li>
        </router-link>
        <router-link to="/dongtai">
          <li>动态</li>
        </router-link>
      </ul>
      <router-link to="/search">
        <i class="iconfont right_ico">
          <img src="../assets/images/fdj.png" alt>
        </i>
      </router-link>
    </div>
  </div>
</template>

<script>
import PersonalCenter from "../containers/Center";
import TimingComponent from "../components/Timing_component";

export default {
  name: "Banner",
  data() {
    return {
      isShowCenter: false,
      isShowTiming: false
    };
  },
  methods: {
    hideCenter(data) {
      // console.log(data);
      this.isShowCenter = false;
      this.isShowTiming = true;
    },
    hideTiming(data){
      // console.log(data);
      this.isShowCenter = false;
      this.isShowTiming = false;
    }
  },
  components: { PersonalCenter, TimingComponent }
};
</script>

<style lang="less" scoped>
.banner{
  
}
.nav {
  width: 100%;
  height: 64px;
  background: url("src/assets/images/top.png") no-repeat;
  background-size: cover;
}
// .left_ico{
//     position: absolute;
//     left: 17px;
//     top: 23px;

// }
.right_ico img {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 21px;
  top: 22px;
}
.list {
  width: 204px;
  line-height: 64px;
  margin: 0 auto;
  li {
    list-style: none;
    float: left;
    margin: 0 14px;
    font-size: 20px;
    // opacity: .9;
  }
  .active {
    color: white;
  }
}

.header_list {
  position: absolute;
  top: 22px;
  left: 21px;
  height: 20px;
  width: 20px;
}

.shadow {
  opacity: 0.3;
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 887;
}
[name="showcenter"] {
  position: relative;
}
.showcenter-enter-active,
.showcenter-leave-active {
  transition: left 0.5s;
}
.showcenter-enter, .showcenter-leave-to /* .fade-leave-active below version 2.1.8 */ {
  left: -33%;
}
.showcenter-leave, .showcenter-enter-to /* .fade-leave-active below version 2.1.8 */ {
  left: 0px;
}
</style>

