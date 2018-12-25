<script>
export default {
    name:'Mymusictab',
    data(){
        return{

        }
    },
    props:{
        label:{
            type:String,
            default:'tab'
        },
        index:{
            type:[String,Number],
            default:1
        }
    },
    mounted(){
      this.$parent.panes.push(this)
    },
     computed:{
        active() {
            return this.$parent.value == this.index
        }
    },
    methods:{
        handlerClick(){
            this.$parent.onChange(this.index)
        }
    },
    render(){
        let tab = this.$slots.label || this.label
        let className = {
            tab:true,
            active:this.active
        }
        return(
            <li class={className} onClick={this.handlerClick}>
                {tab}
            </li>
        )
    }
}
</script>
<style lang="less" scoped>
.tab {
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  margin-bottom:2px;
  margin-left:8px;
  position: relative;
  flex:1;
  cursor: pointer;
}

.tab.active {
  border-bottom: 2px solid white;
}

.tab.last-child {
  margin-right: 0;
}

</style>
