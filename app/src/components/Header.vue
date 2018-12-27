<template>
  <div class="header">
    <span>{{title}}</span>
    <i class="iconfont icon-fanhuijiantouxiangqingye"></i>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scope>
.header {
  font-size: 24px;
  height: 60px;
  padding-left: 20px;
  background: #875af0;
  text-align: center;
  color: #fff;
  position: relative;
  span{
    line-height: 60px;
  }
  .iconfont {
    position: absolute;
    color: #fff;
    top: 20px;
    left: 20px;
  }
}
</style>