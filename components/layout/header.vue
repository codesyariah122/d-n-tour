<template>
  <header>
    <!--? Header Start -->
    <div class="header-area">
      <div class="main-header header-sticky">
        <div class="container-fluid">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-2 col-md-1">
              <div class="logo">
                <a href="index.html"
                  ><img
                    :src="require('~/assets/img/logo/dnlogo.png')"
                    alt=""
                    :style="`${$device.isDesktop ? 'width: 70px;' : ''}`"
                /></a>
              </div>
            </div>
            <div class="col-xl-9 col-lg-10">
              <div class="main-menu black-menu menu-bg-white d-none d-lg-block">
                <div
                  @click="hamburgerMenu"
                  :class="`hamburger hamburger--collapse ${
                    isActive ? 'is-active' : ''
                  }`"
                >
                  <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                  </div>
                </div>
                <nav
                  :class="`hamburger-menu ${menuShow ? 'nav-menu-show' : ''}`"
                >
                  <ul id="navigation">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul class="submenu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog_details.html">Blog Details</a></li>
                        <li><a href="elements.html">Element</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header End -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: null,
      menuShow: null,
    };
  },
  methods: {
    hamburgerMenu() {
      this.isActive = !this.isActive;
      this.menuShow = !this.menuShow;
    },
  },
};
</script>
