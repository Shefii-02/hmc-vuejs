<template>
    <div>
      <div
        class="single-service wow fadeInLeft"
        data-wow-delay=".2s"
        style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft"
      >
        <!-- Background image binding using style -->
        <div
          class="service-bg bg-1 bg-cover"
          :style="{ backgroundImage: `url(${department.image})` }"
        ></div>
  
        <div class="service-content">
          <h3>{{ department.dept_title }}</h3>
  
          <!-- NuxtLink with dynamic route -->
          <NuxtLink :to="`/departments/${department.dept_title}`" class="read-more">Read More</NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    department: Object
  });
  </script>
  
  <style lang="scss" scoped></style>
  