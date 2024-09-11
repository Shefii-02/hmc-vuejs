<template>
    <div>
        <header>
          
             <div class="header-top">
                <div class="container">
                    <ul>
                        <li>
                            <NuxtLink class="text-light text-decoration-none" to="tel:+918585542252">
                                <span class="bi bi-geo-alt me-2"></span> Tirur, Malappuram, Kerala.
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="text-light text-decoration-none" to="tel:+918585542252">
                                <span class="bi bi-telephone-inbound me-2"></span> +91 8585 542 252
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="text-light text-decoration-none" to="mailto:testing@example.com">
                                <span class="bi bi-envelope me-2"></span> testing@example.com
                            </NuxtLink>
                        </li>
                        <li class="d-flex gap-3">
                            <span class="bi bi-facebook"></span>
                            <span class="bi bi-instagram"></span>
                            <span class="bi bi-youtube"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav-bar">
                <div class="container-fluid">
                    <div class="col-lg-12 nav-menu-parent">
                        <div class="row">
                            <div class="col-lg-2">
                                <div class="logo-outer">
                                    <img src="https://indigitalgroup.cloud/images/logo.png"
                                        class="w-80 position-relative">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="nav-menu-options">
                                    <ul>
                                        <li><NuxtLink class="text-decoration-none text-dark" to="/">Home</NuxtLink></li>
                                        <li><NuxtLink class="text-decoration-none text-dark" to="/about-us">About us</NuxtLink></li>
                                        <li><NuxtLink class="text-decoration-none text-dark" to="/contact-us">Page 1</NuxtLink></li>
                                        <li><NuxtLink class="text-decoration-none text-dark" to="/slider">Page 2</NuxtLink></li>
                                        <li><NuxtLink class="text-decoration-none text-dark" to="">Page 3</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="col-lg-12 highlight-buttons">
                                    <div class="row">
                                        <div class="d-inline text-center">
                                            <button class="btn btn-info me-3">Option 1</button>
                                            <button class="btn btn-info me-3">Option 2</button>
                                            <button class="btn btn-info">Option 3</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
        <main>
          <slot />
        </main>
       
        <footer class="footer-area wow fadeIn" data-wow-delay=".2s"
        style="visibility: visible; animation-delay: 0.2s; animation-name: fadeIn;">
        <div class="container">
            <div class="footer-up">
                <div class="row">
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12 ">


                        <div class="social-area text-center mb-3">
                            <img src="https://www.hayathmedicare.in/assets/img/logo-white.png" alt="-logo"><br>
                            <a href="https://www.facebook.com/HMC.KUTTIPURAM/"><i class="lab la-facebook-f"></i></a>
                            <a href="https://instagram.com/hayathmedicare?utm_medium=copy_link"><i
                                    class="lab la-instagram"></i></a>
                            <a href="https://youtube.com/channel/UCCtbo0c3_1oaUXIrvTEU3LQ"><i
                                    class="lab la-youtube"></i></a>
                            <!--<a href="#"><i class="la la-linkedin"></i></a>-->
                        </div>


                    </div>
                    <div class="col-lg-2 offset-lg-1 col-md-4 com-sm-4 col-4">
                        <h5>Departments</h5>
                        <ul class="text-left">
                            <li><a href="General-Medicine">General Medicine</a></li>
                            <li><a href="Orthopaedics">Orthopaedics</a></li>
                            <li><a href="Pediatrics">Pediatrics</a></li>
                            <li><a href="ENT">ENT</a></li>
                            <li><a href="Diabetes">Diabetes</a></li>
                            <li><a href="Gastroenterogy">Gastroenterogy</a></li>
                            <li><a href="Dermatology"> Dermatology</a></li>
                            <li><a href="Pulmonology"> Pulmonology</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                        <h5>Services</h5>
                        <ul class="text-left" style="text-transform:capitalize;">
                            <li>
                                <a href="#"><span>-</span> Laboratory</a>
                                <a href="#"><span>-</span> PHARMACY</a>
                                <a href="#"><span>-</span> ENDOSCOPY</a>
                                <a href="#"><span>-</span> ECG</a>
                                <a href="#"><span>-</span> EMERGENCY CARE</a>
                                <a href="#"><span>-</span> TELEMEDICINE</a>
                                <a href="#"><span>-</span> MEDICINE AT DOOR</a>
                                <a href="#"><span>-</span> HOME CARE</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-12  col-sm-12 col-12">
                        <h5>Quick Links</h5>
                        <ul class="text-left" style="text-transform:capitalize;">
                            <li>
                                <a href="#"><span>-</span> About us</a>
                                <a href="#"><span>-</span> Career</a>
                                <a href="#"><span>-</span> Doctors</a>
                                <a href="#"><span>-</span> Contact</a>
                                <a href="#"><span>-</span> Gallery</a>
                                <a href="#"><span>-</span> News &amp; Events</a>
                                <a href="#"><span>-</span> Get a Appointment</a>
                                <a href="#"><span>-</span> Lab Result</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-bottom">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <p class="copyright-line">© 2021 . All rights reserved.</p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <p class="privacy">Privacy Policy | Terms &amp; Conditions</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
