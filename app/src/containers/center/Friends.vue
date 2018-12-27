<template>
  <div class="friends">
    <Header title="我的好友"/>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="关注" name="first">
          <PeopleList class="item"/>
        </el-tab-pane>
        <el-tab-pane label="粉丝" name="second">粉丝</el-tab-pane>
        <el-tab-pane label="添加好友" name="third">添加好友</el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
import Header from "../../components/Header";
import PeopleList from "../../components/People_list";

export default {
  name: "Friends",
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  components: {
    Header,
    PeopleList
  }
};
</script>

<style lang='less' scoped>
.item{
  padding: 0 10px;
}
</style>
<style lang='less'>
.friends {
  .el-tabs__nav {
    width: 100%;
    .el-tabs__item {
      width: 33.3%;
      font-size: 14px;
      text-align: center;
    }
    .el-tabs__active-bar {
      background-color: #e41f6e;
    }
    .el-tabs__item.is-active {
      color: #e41f6e;
    }
  }
}
</style>