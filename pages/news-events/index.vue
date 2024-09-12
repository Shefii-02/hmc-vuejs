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
        <div v-if="news && news.status === 'success'" class="row">
          <div
            v-for="(news_single, index) in news.data"
            :key="index"
            class="col-lg-3 col-md-6 col-sm-6"
          >
            <NewsCard :news_single="news_single" />
          </div>
        </div>
        <div v-else>
          <!-- Loading or Error messages -->
          <p v-if="news && news.status === 'error'">{{ errorMessage }}</p>
          <p v-else>Loading...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { fetchDoctors, } from './services/api.js';
import { ref, onMounted } from "vue";
const news = ref(null);
import NewsCard from "../components/NewsCard.vue";
import BreadcroumbArea from "../components/BreadcroumbArea.vue";
const fetchNews = async () => {
  try {
    const [newsData] = await Promise.all([
      fetchDoctors(),
    ]);
    news.value = newsData;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    errorMessage.value = error.message; // Set error message for display
  }
};

// Fetch data when component is mounted
onMounted(fetchNews);

</script>

<style lang="scss" scoped></style>
