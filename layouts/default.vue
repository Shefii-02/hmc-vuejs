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
        <div>
          <slot />
        </div>
    </div>
</template>
