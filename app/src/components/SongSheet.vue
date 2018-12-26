<template>
    <div>
        <div class="xx">

        </div>
         <div class="mohu">
            <img src="../assets/images/music_header.png" alt="">
         </div>
         <div class="head">
            <img src="../assets/images/music_header.png" alt="">
         </div>
         <div class="chara">
            <p class="p1">精品歌单 ></p>
            <p class="p1">[小酒馆]剑与魔法·旅途中的休憩时光</p>
            <p class="p1">献给每一位离家的游人、荆棘路中的求道者、远行于荒野之上的冒险家</p>
         </div>
    </div>
</template>

<script>
export default {
    name:"SongSheet"
}
</script>

<style lang="less" scoped>
.mohu{
    width: 100%;
    height: 180px;
    margin-top: 5px;
  img{
      -webkit-filter: blur(3px);
      filter: blur(3px);
      width: 100%;
      height: 180px;
      
  }
}
.head{
    img{
        width: 110px;
        position: absolute;
        left: 15px;
        top: 144px;
    }
}
.chara{
    width: 210px;
    position: absolute;
    top:152px;
    right: 13px;
    p{
        color: white;
        font-size: 14px;
    }
    :nth-child(1){
        font-size: 17px!important;
    }
    :nth-child(2){
        font-size: 14px!important;
        margin: 5px 0;
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis;
    }
    :nth-child(3){
        font-size: 13px!important;
        color: #b1a4a0;
    }
    
}
</style>
