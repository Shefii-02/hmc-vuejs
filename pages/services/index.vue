<template>
  <div>
    <BreadcroumbArea :title="'About Us'" :redirection="'About Us'" />
    <section id="service-3" class="services-area section-padding">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 text-center">
            <div class="section-title">
              <h2 style="color: red">OUR DEPARTMENT</h2>
              <h2>We Provide Great Service <br />for <b>Your Health</b></h2>
            </div>
          </div>
        </div>
        <div v-if="services && services.status === 'success'" class="row">
          <div
            v-for="(service, index) in services.data"
            :key="index"
            class="col-lg-3 col-md-6 col-sm-6"
          >
            <ServiceCard :service="service" />
          </div>
        </div>
        <div v-else>
          <!-- Loading or Error messages -->
          <p v-if="services && services.status === 'error'">{{ errorMessage }}</p>
          <p v-else>Loading...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { fetchServices, } from './services/api.js';
import { ref, onMounted } from "vue";
const services = ref(null);
import ServiceCard from "../components/ServiceCard.vue";
import BreadcroumbArea from '../components/BreadcroumbArea.vue';

const fetchData = async () => {
  try {
    const [servicesData] = await Promise.all([
      fetchServices(),
    ]);
    services.value = servicesData;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    errorMessage.value = error.message; // Set error message for display
  }
};

// Fetch data when component is mounted
onMounted(fetchData);

</script>

<style lang="scss" scoped></style>
