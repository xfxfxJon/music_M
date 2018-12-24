<script>
import TabContainer from "./tab-container"

export default {
    name:"Tabs",
    data(){
        return{
            panes:[]
        }
    },
    props:{
        value:{
            type:[String,Number],
            required:true
        }
    },
    methods:{
        onChanges(index){
            this.$emit("getIndex",index)
        }
    },
    render(){
        return(
            <div class="tabs">
                <ul class="tabs-header">
                    { this.$slots.default }
                </ul>
                <TabContainer panes={this.panes}/>
            </div>
        )
    }
}
</script>
<style scoped>

.tabs-header{
  display:flex;
  list-style:none;
  margin:0;
  padding:0;
  border-bottom:2px solid #ededed;
}

</style>
