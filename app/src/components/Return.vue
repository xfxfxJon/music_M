
<script>
export default {
    name:'Return',
    data(){
        return{

        }
    },
    props:{
        label:{
            type:String,
            default:'返回'
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    render(){
        let returnName = this.$slots.label || this.label
        return(
            <div>
                <i class="iconfont" onClick={this.back}>&#xe643;</i>
                <span>{returnName}</span>
            </div>
        )
    }
}
</script>
<style lang="less" scoped>
div{
    width:100%;
    height:20px;
    background-color:#af24a5;
    color:white;
    padding-top:5px;
    padding-bottom:8px;
    font-size: 16px;
    span{
        margin-left:5px;
    }
    .iconfont{
        color:white;
    }
}
</style>


