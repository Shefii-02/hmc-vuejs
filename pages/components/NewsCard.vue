<template>
  <div
    class="single-blog-item wow fadeInLeft"
    data-wow-delay=".4s"
    style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft"
  >
    <div class="blog-bg">
        <img :src="news_single.image" class="w-100">
    </div>
    <div class="blog-content">
      <p class="blog-meta"><i class="bi bi-calendar-check"></i>{{ news_single.post_date }}</p>
      <h5>
        <a href="single-view?news=57">{{ news_single.title }}</a>
      </h5>
      <NuxtLink to="single-view?news=57" class="read-more text-dark">Read More</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    news_single: Object
  });
</script>

<style lang="scss" scoped></style>
