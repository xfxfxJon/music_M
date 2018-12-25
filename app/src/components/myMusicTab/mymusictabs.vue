<script>
import Mymusictabcontainer from './mymusictab-container'
export default {
    name:'Mymusictabs',
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
        onChange(index){
            this.$emit('getIndex',index)
        }
    },
    render(){
        return(
            <div class="tabs">
                <ul class="tabs-header">
                    {this.$slots.default}
                </ul>
                <Mymusictabcontainer panes={this.panes}/>
            </div>
         
        )
    }
}
</script>
<style lang="less" scoped>
.tabs-header{
    display: flex;
    background-color:#af24a5;
    color:white;
    text-align: center;
    list-style:none;
    margin:0;
    padding:0;
  
}


</style>
