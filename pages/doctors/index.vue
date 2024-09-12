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
        <div v-if="doctors && doctors.status === 'success'" class="row">
          <div
            v-for="(doctor, index) in doctors.data"
            :key="index"
            class="col-lg-3 col-md-6 col-sm-6"
          >
            <DoctorCard :doctor="doctor" />
          </div>
        </div>
        <div v-else>
          <!-- Loading or Error messages -->
          <p v-if="departments && departments.status === 'error'">{{ errorMessage }}</p>
          <p v-else>Loading...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const doctors = ref(null);
import DoctorCard from "../components/DoctorCard.vue";
import BreadcroumbArea from "../components/BreadcroumbArea.vue";

const fetchDoctors = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/resource/doctors");

    if (!response.ok) {
      // Check if response status is not OK (status code 200-299)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    doctors.value = data;

    if (data.status !== "success") {
      throw new Error("Data status is not success");
    }
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    doctors.value = { status: "error", data: [] };
    errorMessage.value = error.message; // Set error message for display
  }
};
onMounted(fetchDoctors);
</script>

<style lang="scss" scoped></style>
