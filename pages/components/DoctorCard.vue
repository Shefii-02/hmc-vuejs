<template>
    <div class="single-team-member">
      <!-- Dynamic background image -->
      <div
        class="team-member-bg"
        :style="{ backgroundImage: `url(${doctor.image})` }"
      >
        <div class="team-content">
          <!-- Doctor's name -->
          <div class="team-title">
            <a href="#">Dr: {{ doctor.doctor_name }}</a>
          </div>
  
          <!-- Doctor's qualifications and department -->
          <div class="team-subtitle">
            <p>{{ doctor.qualifications }}</p>
            <p>({{ doctor.departments }})</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const props = defineProps({
        doctor: Object
    });
  </script>
  
  <style lang="scss" scoped>
  </style>
  