<script>
export default {
    name:'Mymusictab-container',
    data(){
        return{

        }
    },
    props:{
        panes:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    render(){
        var contents = this.panes.map((element,index) => {
            return element.active ? element.$slots.default:'';
        });
        return(
            <div class='tab-content'>
                {contents}
            </div>
        )
    }
}
</script>
<style lang="less" scoped>

</style>

