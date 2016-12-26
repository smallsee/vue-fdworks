<template>
   <div class="item-wrapper">
     <ul>
       <li v-for="item in videoItemData.data" class="item">
         <img :src="item.thumb" width="160" height="100">
         <div class="item-mask"></div>
         <div class="item-title">{{item.title}}</div>
         <div class="info">
           <p class="up">up: {{item.user.name}}</p>
           <p class="play">播放量: </p>
         </div>
       </li>
     </ul>

   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      videoItemData: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .item-wrapper{
    .item{
      position: relative;
      float: left;
      cursor: pointer;
      margin-right: 20px;
      margin-bottom: 20px;
      width: 160px;
      height: 100px;
      background: red;
      &:nth-of-type(4){
        margin-right: 0;
      }
      &:nth-of-type(5){
        margin-bottom: 0;
      }
      &:nth-of-type(6){
        margin-bottom: 0;
      }
      &:nth-of-type(7){
        margin-bottom: 0;
      }
      &:nth-of-type(8){
        margin-bottom: 0;
        margin-right: 0;
      }
      .item-mask{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(7,17,27,0);
        transition: all 0.2s;
      }
      .item-title{
        position: absolute;
        top: 80px;
        left:0;
        margin: 0 5px;
        line-height: 18px;
        text-align: center;
        width: 150px;
        height: 18px;
        font-size: 12px;
        color: #fff;
        transition: all 0.4s;
      }
      .info{
        opacity: 0;
        position: absolute;
        bottom: 0;
        transition: all 0.4s;
        p{
          margin-left: 5px;
          line-height: 20px;
          font-size: 12px;
          color: #99a2aa;
        }
      }
      &:hover .item-mask{
        background: rgba(7,17,27,0.5);
      }
      &:hover .item-title{
        top: 5px;
      }
      &:hover .info{
        opacity: 1;
      }
    }


  }
</style>
