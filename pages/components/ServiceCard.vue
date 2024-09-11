<template>

    <div
      class="single-service wow fadeInLeft"
      data-wow-delay=".2s"
      style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft"
    >
      <div
        class="service-bg bg-1 bg-cover"
          :style="{ backgroundImage: `url(${service.image})` }"
      ></div>
      <div class="service-content">
        <h3>{{ service.service_title }}</h3>
        <NuxtLink to="{{ service.service_title }}" class="read-more">Read More</NuxtLink>
      </div>
    </div>
  
</template>

<script setup>
const props = defineProps({
    service: Object
});
</script>

<style lang="scss" scoped></style>


