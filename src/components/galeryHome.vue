<template>
  <div>
    <h2 class="mb-3" style="text-align: left">Image Galery</h2>
    <Swiper class="swiper" :options="swiperOptions">
      <SwiperSlide v-for="g of listData" :key="g.Id">
        <img :src="g.picture" :alt="g.unit" height="200px" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: { Swiper, SwiperSlide },
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
