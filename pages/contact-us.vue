<template>
  <div>
    <BreadcroumbArea :title="'About Us'" :redirection="'About Us'" />

    <!-- Contact Area -->

    <div id="contact-us" class="contact-us-area section-padding">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 text-center">
            <div class="section-title">
              <h6>Contact Us</h6>
              <!-- <h2>Don't hesitate to<b> contact</b> <br>for get <b>Information</b></h2> -->
              <h2>We are happy to help you.</h2>
            </div>
          </div>
        </div>
        <div class="contact-us-wrapper">
          <div class="row no-gutters">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="contact-us-inner">
                <div class="info-i">
                  <span><i class="las la-map-marker"></i></span>
                </div>
                <h5>Location</h5>

                <p>
                  Tirur Road, <br />
                  Kuttippuram,Malappuram
                </p>
                <!-- <a href="#">Find us on map</a> -->
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="contact-us-inner">
                <div class="info-i">
                  <span><i class="las la-clock"></i></span>
                </div>
                <h5>Working Hour</h5>
                <p>Monday-Sunday <br />08.00-22.00</p>
                <!-- <a href="#">Get Direction</a> -->
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="contact-us-inner">
                <div class="info-i">
                  <span><i class="las la-mobile"></i></span>
                </div>
                <h5>Phone Number</h5>
                <p>
                  +91 22 22 22 22 22<br />
                  +91 33 33 33 33 33
                </p>
                <!-- <a href="#">Call Now</a> -->
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="contact-us-inner">
                <div class="info-i">
                  <span><i class="las la-envelope"></i></span>
                </div>
                <h5>E-mail Address</h5>
                <p>info@hmc.com<br />hayath-medicare@gmail.com</p>
                <!-- <a href="#">Mail Us</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->

    <div id="contact-page" class="contact-section bg-cover section-padding">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-12 col-md-12 col-12 text-center wow fadeInRight"
            style="visibility: visible; animation-name: fadeInRight"
          >
            <div class="contact-form-wrapper row mt-100">
              <div class="section-title col-lg-12">
                <h6>Stay with Us</h6>
                <h2>Get in <b>Touch</b></h2>
              </div>
              <div class="col-lg-6">
                <div class="col-lg-12 mt-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5509946420307!2d76.02970801411696!3d10.845632560879807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b73c80314e33%3A0x49cf3b197f4eaa49!2sHayath%20Medicare!5e0!3m2!1sen!2sin!4v1642097857941!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-form">
                  <form action="">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-12">
                        <label class="text-light">Full Name</label>
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <label class="text-light">Email</label>
                        <input type="email" placeholder="E-mail" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <label class="text-light">Phone Number</label>
                        <input type="tel" placeholder="Phone Number" />
                      </div>
                      <div class="col-lg-6 col-md-6 col-12">
                        <label class="text-light">Subject</label>
                        <input type="text" placeholder="Subject" />
                      </div>
                      <div class="col-lg-12">
                        <label class="text-light">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write Message"
                        ></textarea>
                      </div>
                      <div class="col-lg-12 col-md-6 col-12 text-center">
                        <button class="main-btn">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
