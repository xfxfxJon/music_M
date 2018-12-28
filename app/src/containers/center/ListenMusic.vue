<template>
  <div class="ListenMusic">
    <Header title="听歌识曲"/>
    <div class="content">
      <h3>正在识别</h3>
      <p class="loading">小沐正在努力识别中, 请稍后</p>
      <div class="center">
        <img src="../../assets/images/listen_music_center_move.png" alt>
      </div>
      <div class="bottom">
        <div class="left">
          <img src="../../assets/images/listen_music_distinguish.png" alt>
          <p>听歌识曲</p>
        </div>
        <div class="right">
          <img src="../../assets/images/listen_music_history.png" alt>
          <p>识别历史</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";

export default {
  name: "ListenMusic",
  data() {
    return {};
  },
  components: { Header }
};
</script>

<style lang='less' scoped>
.ListenMusic {
  text-align: center;
  .content {
    padding: 40px;
    .loading {
      margin: 10px 0 40px;
    }
    .center {
      height: 307px;
      width: 300px;
      background: url('src/assets/images/listen_music_bg.png') no-repeat;
      background-size: cover;
      margin: 0 auto;
      position: relative;
      img {
        width: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -38px;
        margin-left: -55px;
        animation: circle_center 3s linear infinite;
      }
    }
    .bottom {
      color: #875af0;
      margin-top: 40px;
      padding: 0 20px;
      .left {
        float: left;
        img {
          width: 30px;
          height: 30px;
          margin-bottom: 10px;
        }
      }
      .right {
        float: right;
        img {
          width: 30px;
          height: 30px;
          margin-bottom: 10px;
        }
        p {
          color: #555;
        }
      }
    }
  }

  @keyframes circle_center {
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  }
}
</style>