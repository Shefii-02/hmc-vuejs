<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

  const { banners } = defineProps(["banners"]);
</script>

<template>
  <div class="carousel-container">
    <Carousel
      :itemsToShow="1"
      :itemsToScroll="1"
      :transition="500"
      :autoplay="2000"
      :wrap-around="true"
    >
      <Slide v-for="(image, index) in banners" :key="index">
        <img :src="image" alt="Carousel Image" class="carousel-image" />
      </Slide>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel-container {
  max-width: 100%;
  margin: 0 auto;
}

.carousel-image {
  width: 100%;
  height: auto;
}
</style>
