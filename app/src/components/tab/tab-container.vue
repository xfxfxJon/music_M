<script>
export default {
  name: "TabContainer",
  data() {
    return {};
  },
  props: {
    panes: Array,
    default: function() {
      return [];
    }
  },
  render() {
    var contents = this.panes.map((element, index) => {
        // element:active  tab结构 <tab><h3></h3></tab>
      return element.active ? element.$slots.default : "";
    });

    return <div class="tab-content">{ contents }</div>;
  }
};
</script>
<style scoped>
</style>
