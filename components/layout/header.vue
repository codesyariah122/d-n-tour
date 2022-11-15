<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div class="container">
      <a class="navbar-brand" href="/"
        ><img
          v-if="scrolling"
          :src="require('~/assets/images/default/new-brand-logo-black.png')"
          width="30"
          style="margin-top: -0.3rem"
        />
        <img
          v-else
          :src="require('~/assets/images/default/new-brand-logo-white.png')"
          width="30"
          style="margin-top: -0.3rem"
        />
        <span
          style="
            font-family: 'Rubik Bubbles', cursive !important;
            font-size: 23px !important;
          "
          >D</span
        ><span
          style="
            font-size: 23px !important;
            color: #01d28e !important;
            font-family: 'Rubik Bubbles', cursive;
          "
          >&amp;</span
        ><span
          style="
            font-family: 'Rubik Bubbles', cursive !important;
            font-size: 23px !important;
          "
          >N</span
        ></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu"></span>
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li :class="`nav-item ${isActive ? 'active' : ''}`">
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li :class="`nav-item ${isActive ? 'active' : ''}`">
            <a href="#about" class="nav-link">About</a>
          </li>
          <li :class="`nav-item ${isActive ? 'active' : ''}`">
            <a href="#services" class="nav-link">Services</a>
          </li>
          <li :class="`nav-item ${isActive ? 'active' : ''}`">
            <a href="#pricing" class="nav-link">Pricing</a>
          </li>
          <li :class="`nav-item ${isActive ? 'active' : ''}`">
            <a href="#blog" class="nav-link">Blog</a>
          </li>
          <li :class="`nav-item ${isActive ? 'active' : ''}`">
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["isActive"],
  data() {
    return {
      scrolling: false,
    };
  },

  beforeMount() {},

  mounted() {
    this.bodyScroll();
    this.scrollSpy();
  },

  methods: {
    bodyScroll() {
      document.addEventListener("scroll", (e) => {
        const scroll = window.scrollY;
        this.scrolling = scroll > 100 ? true : false;
      });
    },
    scrollSpy() {
      var OnePageNav = function () {
        $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
          "click",
          function (e) {
            e.preventDefault();

            var hash = this.hash,
              navToggler = $(".navbar-toggler");
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top,
              },
              700,
              "easeInOutExpo",
              function () {
                window.location.hash = hash;
              }
            );

            if (navToggler.is(":visible")) {
              navToggler.click();
            }
          }
        );
        $("body").on("activate.bs.scrollspy", function () {
          console.log("nice");
        });
      };
    },
  },
};
</script>
