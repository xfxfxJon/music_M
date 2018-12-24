<script>
export default {
  name: "Tab",
  data() {
    return {};
  },
  props: {
    label: {
      type: String,
      default: "tab"
    },
    index: {
      type: [String, Number],
      default: 1
    }
  },
  mounted(){
      this.$parent.panes.push(this)
  },
  methods:{
      handlerClick(){
          this.$parent.onChanges(this.index)
      }
  },
  computed: {
    active() {
      return this.$parent.value == this.index;
    }
  },
  render() {
    let tab = this.$slots.label || this.label;

    let className = {
      tab: true,
      active: this.active
    };
    return <li class={className} onClick={ this.handlerClick }>{tab}</li>;
  }
};
</script>
<style scoped>
.tab {
  flex: 1;
  text-align: center;
  list-style: none;
  line-height: 40px;
  position: relative;
  bottom: -2px;
  cursor: pointer;
  font-size: 18px;
}

.tab.active {
  border-bottom: 3px solid #e41f6e;
  color: #e41f6e;
}

.tab.last-child {
  margin-right: 0;
}
</style>
