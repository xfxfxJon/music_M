<template>
    <div class="lrcContainer">
        <div class="lrc" ref="lrc">
            <p 
            :class="{'active':keyArr[index] < currentTime &&  keyArr[index+1] > currentTime}"
            v-for="(item,key,index) in lrcData"
            :key="index">
            {{ item }}{{ getScrollTop(index) }}</p>
            <!-- <p>{{this.currentTime}}</p> -->
        </div>
    </div>
</template>

<script>


export default {
    name:"LRC",
    data(){
        return{
            lrcData: {},
            keyArr: [] 
        }
    },
    components:{
        
    },
    props:{
        musicId:{
            type:[String,Number],
            required:true
        },
        currentTime: {
            type: [String, Number],
            default: 0
         },
        durationTime: {
            type: [String, Number],
            default: 0
        }
    },
    mounted(){
        if(this.musicId){
            this.$axios.get("http://localhost:3000/lyric?",{
                params:{
                    id:this.musicId
                }
            })
            .then(res => {
                this.setLRCData(res.data);
            })
            .catch(error => new Error(error));
        }
        
    },
    computed:{
        getAllKey(){
            for(var i in this.lrcData){
                this.keyArr.push(i)
            }
            
        }
    },
    methods:{
        setLRCData(data){
            var lyrics = data.lrc.lyric.split("\n");
             var lrcObj = {};
            // console.log(lyrics)
            for(let i=0; i<lyrics.length;i++){
                 var lyric = decodeURIComponent(lyrics[i]);
                //  console.log(lyric)
                var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
                var timeRegExpArr = lyric.match(timeReg); //test
                // console.log(timeRegExpArr)
                if (!timeRegExpArr) continue;
                var clause = lyric.replace(timeReg, "");
                // console.log(clause)
                 for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
                    var t = timeRegExpArr[k];
                    var min = Number(String(t.match(/\[\d*/i)).slice(1)), // parseInt  parseFloat
                        sec = Number(String(t.match(/\:\d*/i)).slice(1));
                    var time = min * 60 + sec;
                    lrcObj[time] = clause;
                }
                // console.log(lrcObj)
            }
             this.lrcData = lrcObj;
             this.getAllKey();
             
        },
        getScrollTop(index){
            // console.log(this.currentTime)
            if(this.keyArr[index] < this.currentTime &&  this.keyArr[index+1] > this.currentTime){
                // 符合滚动条件
                this.$refs.lrc.style.top = -((index-1)*30)+"px"
            }
        }
    }
}
</script>

<style scoped>
    .active {
        color: red;
    }
    .lrcContainer{
        width:100%;
        height:80px;
        /* background-color: blueviolet; */
        overflow: hidden;
        position: relative;
    }
    .lrc{
        width: 100%;
        font-size:12px;
        text-align: center;
        position: absolute;
        top: 0;
    }
    .lrc p {
        height: 30px;
        line-height: 30px;
    }
</style>
