<template>
  <div class="video-box">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in videoData.data">
        <img :src="slide.thumb" width="440" height="220">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      videoData: {
        type: Object
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: 5000,
          setWrapperSize: true,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
          loop: true,
          paginationClickable: true,
          width: 440
        },
        swiperSlides: [1, 2, 3, 4, 5]
      };
    },
    mounted() {
    },
    computed: {
    },
    components: {
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .video-box{
    width: 440px;
    height: 220px;
    .swiper-container{
    }
  }

</style>
