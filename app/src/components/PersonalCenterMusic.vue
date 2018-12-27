<template>
  <div class="personal_center_music">
    <div class="personal_center_music_title">歌单</div>
    <ul>
      <li>
        <img src="../assets/images/personal_center_music_listen.png" alt>
        <div class="content">
          <h5>听歌排行</h5>
          <p>累计听歌200首</p>
        </div>
      </li>
      <li>
        <img src="../assets/images/personal_center_music_love.png" alt>
        <div class="content">
          <h5>喜欢的音乐</h5>
          <p>
            <span>30</span>首,
            播放
            <span>60</span>次
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style <style lang="less" scoped>
.personal_center_music {
  text-align: left;
  .personal_center_music_title {
    width: 100%;
    height: 30px;
    font-size: 16px;
    padding-left: 10px;
    line-height: 30px;
    background: #f7f7f7;
  }
  ul {
    margin-top: 10px;
    padding: 0 10px;
    li {
      overflow: hidden;
      padding: 5px 0;
      border-bottom: 1px solid #e9e9e9;
      &:last-child {
        border-bottom: none;
      }
      img {
        width: 60px;
        height: 60px;
        float: left;
      }
      .content {
        float: left;
        margin-left: 10px;
        padding-top: 10px;
        p {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>