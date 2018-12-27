<template>
  <div class="nearby">
    <Header title="附近的人"/>
    <div class="error">获取位置信息失败,请在设置中开启app的定为权限后重试</div>
  </div>
</template>

<script>
import Header from "../../components/Header";

export default {
  name: "Nearby",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style lang='less' scoped>
.nearby {
  .error {
    margin-top: 40px;
    text-align: center;
    font-size: 12px;
    color: #888;
  }
}
</style>