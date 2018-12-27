<template>
  <div class="people_item">
    <img src="https://via.placeholder.com/100x100" alt>
    <div class="content">
      <h5>云音乐小秘书</h5>
      <p>专辑:
        <span>[进阶]</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleItem",
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.people_item {
  overflow: hidden;
  padding: 10px 0;
  border-bottom: 1px solid #e9e9e9;
  &:last-child{
    border-bottom: none;
  }
  img {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .content{
    float: left;
    margin-left: 10px;
    h5{
      margin-top: 5px;
      font-weight: normal;
      color: black;
    }
    p{
      font-size: 12px;
    }
  }
}
</style>