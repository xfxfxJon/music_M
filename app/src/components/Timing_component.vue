<template>
  <div class="container" @click="hideTiming">
    <h3>定时停止播放</h3>
    <ul>
      <li>不开启
        <span>√</span>
      </li>
      <li>10分钟后</li>
      <li>20分钟后</li>
      <li>30分钟后</li>
      <li>45分钟后</li>
      <li>60分钟后</li>
      <li>自定义</li>
    </ul>
    <div class="bottom">
      <input type="checkbox" name id>计时结束后播完当前歌曲再停止
    </div>
  </div>
</template>

<script>
export default {
  name: "TimingComponent",
  data() {
    return {};
  },
  methods: {
    hideTiming(){
      this.$emit('hideTiming', false);
    }
  },
};
</script>

<style lang='less' scoped>
.container {
  position: absolute;
  z-index: 888;
  height: 60%;
  width: 300px;
  top: 20%;
  left: 50%;
  margin-left: -150px;
  background: #fff;
  padding: 20px;
  color: #000;
  box-sizing: border-box;
  h3{
    font-weight: normal;
  }
  ul{
    li{
      margin: 25px 0;
      font-size: 12px;
      span{
        float: right;
        color: red;
      }
    }
  }
  .bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    border-top: 1px solid #e9e9e9;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    input{
      border: 1px solid #e9e9e9;
      width: 15px;
      height: 15px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>