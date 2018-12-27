<template>
  <div class="people_list">
    <PeopleItem/>
    <PeopleItem/>
    <PeopleItem/>
  </div>
</template>

<script>
import PeopleItem from "./People_item";

export default {
  name: "PeopleList",
  data() {
    return {};
  },
  components: {
    PeopleItem
  }
};
</script>

<style lang='less' scoped>
</style>