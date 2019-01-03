<template>
    <div class="lrc" ref="lrc">
        <p v-for="(item,key,index) in lrcData"
        :key="index">{{ item }}</p>
    </div>
</template>

<script>


export default {
    name:"LRC",
    data(){
        return{
            lrcData: {} 
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
                console.log(timeRegExpArr)
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
        }
    }
}
</script>

<style scoped>
    .lrc{
        width:100%;
        height:80px;
        background-color: blueviolet;
        padding:0 20px;
    }
</style>
