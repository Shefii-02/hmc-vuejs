<script setup>import { ref, onMounted } from 'vue';
import Slider from './components/SliderBanner.vue';
import DepartmentCard from './components/DepartmentCard.vue';
import ServiceCard from './components/ServiceCard.vue';
import DoctorCard from './components/DoctorCard.vue';
import NewsCard from './components/NewsCard.vue';
import YotubeVideoCard from './components/YotubeVideoCard.vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

// Import API functions
import { fetchBanners, fetchDepartments, fetchDoctors, fetchServices, fetchNews, fetchYtVideos } from './services/api.js';

const banners = ref(null);
const departments = ref(null);
const services = ref(null);
const doctors = ref(null);
const news = ref(null);
const ytVideos = ref(null);

const errorMessage = ref('');

// Fetch data and handle loading, error states
const fetchData = async () => {
  try {
    const [bannersData, departmentsData, doctorsData, servicesData, newsData, ytVideosData] = await Promise.all([
      fetchBanners(),
      fetchDepartments(),
      fetchDoctors(),
      fetchServices(),
      fetchNews(),
      fetchYtVideos(),
    ]);

    banners.value = bannersData;
    departments.value = departmentsData;
    services.value = servicesData;
    doctors.value = doctorsData;
    news.value = newsData;
    ytVideos.value = ytVideosData;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    errorMessage.value = error.message; // Set error message for display
  }
};

// Fetch data when component is mounted
onMounted(fetchData);
</script>

<template>
  <div>
    <section class="slider0">
      <!-- Conditionally render Slider component based on banners status -->
      <Slider v-if="banners && banners.status === 'success'" :banners="banners.data" />
      <div v-else>
        <!-- Optional: Add a loading or error message here -->
        <p v-if="banners && banners.status === 'error'">{{ errorMessage }}</p>
        <p v-else>Loading...</p>
      </div>
    </section>

    <section class="about-area sky-bg section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 m-0 p-0">
            <div class="mt-10"></div>
            <div
              class="about-bg-wrapper wow fadeInUp"
              data-wow-delay=".2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp"
            >
              <div class="about-bg-innner bg-cover"></div>
            </div>
          </div>
          <div class="col-lg-7 m-0 p-0">
            <div
              class="about-content-wrapper wow fadeInUp"
              data-wow-delay=".4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp"
            >
              <div class="section-title">
                <h6>About Us</h6>
                <h2>We're the Top <b>Health care </b> in Situation</h2>
              </div>
              <p>
                &nbsp;&nbsp;HAYATH MEDICARE Hospital and Diagnostic Centre was established
                in the year 2020 by HAYATH MEDICARE LLP near Tirur road in Kuttippuram. We
                have evolved as a centre of excellence in medicine by delivering
                high-quality healthcare services at affordable cost to the poor in
                particular and the society at large.
              </p>
              <br />
              <p>
                &nbsp;&nbsp;Today, we are a leading healthcare provider in Kuttippuram,
                equipped with quality facilities to deliver the best of services and
                thereby fulfilling its commitment to the society. This super speciality
                clinic, with the expertise of senior consultants, high quality nursing
                staff, up to date diagnostic facilities and a committed management has
                taken giant leaps in its growth to a multi-specialty centre of excellence.
              </p>
              <NuxtLink class="float-end" to="about-us">Read More..</NuxtLink>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <div v-if="departments && departments.status === 'success'" class="row">
          <div
            v-for="(dept, index) in departments.data"
            :key="index"
            class="col-lg-3 col-md-6 col-sm-6"
          >
            <DepartmentCard :department="dept" />
          </div>
        </div>
        <div v-else>
          <!-- Loading or Error messages -->
          <p v-if="departments && departments.status === 'error'">{{ errorMessage }}</p>
          <p v-else>Loading...</p>
        </div>
      </div>
    </section>
    <section id="team-page" class="team-area gray-bg section-padding">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 text-center">
            <div class="section-title">
              <h2 style="color: red">OUR DOCTORS</h2>
              <h2><b>Meet the Our Best Experts</b></h2>
            </div>
          </div>
        </div>
        <div v-if="doctors && doctors.status === 'success'" class="row">
          <Carousel
            :itemsToShow="4"
            :itemsToScroll="1"
            :transition="500"
            :autoplay="2000"
            :wrap-around="true"
          >
            <Slide v-for="(doctor, index) in doctors.data" :key="index">
              <DoctorCard :doctor="doctor" />
            </Slide>
          </Carousel>
        </div>
        <div v-else>
          <!-- Loading or Error messages -->
          <p v-if="doctors && doctors.status === 'error'">{{ errorMessage }}</p>
          <p v-else>Loading...</p>
        </div>
      </div>
    </section>
    <section id="service-3" class="services-area section-padding">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 text-center">
            <div class="section-title">
              <h2 style="color: red">WHAT WE DO</h2>
              <h2>
                We take great pride in providing our valued patients with a personalised
                service and thehighest standards of Hospital excellence.
              </h2>
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
    <section class="choose-us-area section-padding">
      <div class="overlay-2"></div>
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 text-center">
            <div class="section-title">
              <h2 style="color: red">WHY CHOOSE US</h2>
              <h2>We offer perfect<b> Care For You</b></h2>
            </div>
          </div>
        </div>
        <div
          class="choose-us-wrapper wow fadeInUp"
          data-wow-delay=".2s"
          style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp"
        >
          <div class="row no-gutters">
            <div class="col-lg-3 col-md-6 col-6">
              <div class="choose-us-inner">
                <div class="choose-us-icon">
                  <img
                    src="https://www.hayathmedicare.in/assets/img/icon/worldwide.png"
                    alt=""
                  />
                </div>
                <h5>Health facility</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-6">
              <div class="choose-us-inner">
                <div class="choose-us-icon">
                  <img
                    src="https://www.hayathmedicare.in/assets/img/icon/door-door.png"
                    alt=""
                  />
                </div>
                <h5>Qualified Doctors</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-6">
              <div class="choose-us-inner">
                <div class="choose-us-icon">
                  <img
                    src="https://www.hayathmedicare.in/assets/img/icon/speed.png"
                    alt=""
                  />
                </div>
                <h5>Patient Friendly</h5>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-6">
              <div class="choose-us-inner">
                <div class="choose-us-icon">
                  <img
                    src="https://www.hayathmedicare.in/assets/img/icon/24-hours-2.png"
                    alt=""
                  />
                </div>
                <h5>24/7 Care</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="spacer">
      <div class="spacer-bg sky-bg bg-cover" style="background-color: #092a46">
        <!-- <a href="" class="main-btn">Get A Quote</a> -->
      </div>
    </section>
    <div id="testimonial-2" class="testimonial-area sky-bg section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title mt-5 mb-5">
              <h2 style="color: red">OUR VIDEOS</h2>
            </div>
          </div>
        </div>

        <div class="col-lg-12">
          <!-- Ensure you're checking ytVideos.status, not news.status -->
          <div v-if="ytVideos && ytVideos.status === 'success'" class="row">
            <Carousel
              :itemsToShow="4"
              :itemsToScroll="1"
              :transition="500"
              :autoplay="2000"
              :wrap-around="true"
            >
              <Slide v-for="(ytVideo, index) in ytVideos.data" :key="index">
                <YotubeVideoCard :ytVideo="ytVideo" />
              </Slide>
            </Carousel>
          </div>
          <div v-else>
            <!-- Loading or Error messages -->
            <p v-if="ytVideos && ytVideos.status === 'error'">{{ errorMessage }}</p>
            <p v-else>Loading...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="blog-area gray-bg section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-12">
            <div class="section-title">
              <h6>News</h6>
              <h2>What <b>happen</b> inside our <b>Part</b></h2>
            </div>
          </div>

          <div class="col-lg-6 text-right"></div>
        </div>
        <div class="row">
          <div v-if="news && news.status === 'success'" class="row">
            <div
              v-for="(news_single, index) in news.data.slice(0, 4)"
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
      </div>
    </div>

    <section class="col-lg-12 mt-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5509946420307!2d76.02970801411696!3d10.845632560879807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b73c80314e33%3A0x49cf3b197f4eaa49!2sHayath%20Medicare!5e0!3m2!1sen!2sin!4v1642097857941!5m2!1sen!2sin"
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
      ></iframe>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
