<template>
    <div>
        <Return label='我喜欢'/>
        <div class="mylike_content">
            <!-- <ul class="song_list">
                <li>
                    <span class="song_name">可不可以给我你的微信</span>
                    <span>-</span>
                    <span class="song_author">Milky</span>
                    <i class="iconfont">&#xe63c;</i>
                </li>
                <li>
                    <span class="song_name">wonderfulU(Demo Version)</span>
                    <span>-</span>
                    <span class="song_author">AGA</span>
                    <i class="iconfont">&#xe63c;</i>
                </li>
                <li>
                    <span class="song_name">即兴</span>
                    <span>-</span>
                    <span class="song_author">叫我小咪</span>
                    <i class="iconfont">&#xe63c;</i>
                </li>
                <li>
                    <span class="song_name">侧脸</span>
                    <span>-</span>
                    <span class="song_author">于果</span>
                    <i class="iconfont">&#xe63c;</i>
                </li>
                <li>
                    <span class="song_name">听见下雨的声音</span>
                    <span>-</span>
                    <span class="song_author">周杰伦</span>
                    <i class="iconfont">&#xe63c;</i>
                </li>
            </ul> -->
            <LikeSongList :url="'http://localhost:3000/song/detail'" :params="LikeParams"/>  
        </div>
    </div>
</template>
<script>
import Return from '../components/Return'
import LikeSongList from '../components/LikeSongList'
import SongList from '../components/SongList'
export default {
    name:'MyLike',
    data(){
        return{
            LikeParams:{
                ids:347230
            }
        }
    },
    components:{
        Return,
        LikeSongList
    },
    
    
}
</script>

<style lang="less" scoped>
.mylike_content{
    width:100%;
    height:640px;
    // background-color: #7829D1;
    color:white;
    background: -webkit-linear-gradient(#712AD7, #AE24A6); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#712AD7, #AE24A6); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#712AD7, #AE24A6); /* Firefox 3.6 - 15 */
    background: linear-gradient(#712AD7, #AE24A6); /* 标准的语法 */
    .song_list{
        padding-top:10px;
        text-align: left;
        li{
           color:white;
           padding:10px;
           .iconfont{
               float:right;
           }
        }
    }
}
</style>

