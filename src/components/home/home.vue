<template>
  <div class="scroll-wrapper">
    <videoScroll :videoData="videoScroll"></videoScroll>
    <div class="video_top">
      <videoTopItem :videoItemData="videoTopItem"></videoTopItem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import videoScroll from 'components/videoScroll/videoScroll';
  import videoTopItem from 'components/videoTopItem/videoTopItem';
  import Mock from 'mockjs';

  const ERROR = 0;

  export default {
    data() {
      return {
        videoScroll: {},
        videoTopItem: {}
      };
    },
    created() {
      this.$http.get('http://rap.taobao.org/mockjs/12149/api/video_scroll?accessToken=aaa').then((response) => {
        response = response.body;
        if (Mock.mock(response).errno === ERROR) {
          this.videoScroll = Mock.mock(response);
        }
      });
      this.$http.get('http://rap.taobao.org/mockjs/12149/api/video_top?accessToken=sadsa').then((response) => {
        response = response.body;
        if (Mock.mock(response).errno === ERROR) {
          this.videoTopItem = Mock.mock(response);
          console.log(Mock.mock(response));
        }
      });
    },
    components: {
      videoScroll,
      videoTopItem
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .scroll-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .video_top{
      width: 700px;
      height: 220px;
    }
  }
</style>
