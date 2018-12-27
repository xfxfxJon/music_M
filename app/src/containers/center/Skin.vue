<template>
  <div class="skin">
    <Header title="个性皮肤"/>
    <div class="container">
      <div class="Official">
        <h5>官方推荐</h5>
        <ul>
          <li>
            <img src="https://via.placeholder.com/80x120" alt>
            <p>基佬紫</p>
            <p>使用中</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/80x120" alt>
            <p>官方白</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/80x120" alt>
            <p>自选颜色</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/80x120" alt>
            <p>自定义皮肤</p>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <h5>推荐</h5>
        <ul>
          <li>
            <img src="https://via.placeholder.com/80x120" alt>
            <p>妞妞端午</p>
            <p>免费</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/80x120" alt>
            <p>多多嘻嘻</p>
            <p>免费</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/80x120" alt>
            <p>冷兔和风</p>
            <p>免费</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";

export default {
  name: "Skin",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style lang='less' scoped>
.skin {
  .container {
    padding: 10px;
    .Official {
      overflow: hidden;
      h5 {
        font-weight: normal;
        color: #000;
      }
      ul {
        margin-top: 10px;
        li {
          float: left;
          width: 25%;
          text-align: center;
          p {
            font-size: 12px;
            // text-align: left;
            // padding-left: 10px;
            &:nth-child(2) {
              color: #000;
            }
          }
        }
      }
    }
    .recommend {
      clear: both;
      margin-top: 30px;
      overflow: hidden;
      h5 {
        font-weight: normal;
        color: #000;
      }
      ul {
        margin-top: 10px;
        li {
          float: left;
          width: 33.3%;
          text-align: center;
          p {
            font-size: 12px;
            // text-align: left;
            // padding-left: 10px;
            &:nth-child(2) {
              color: #000;
            }
            &:nth-child(3) {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>