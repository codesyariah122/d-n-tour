export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "D & N Travel | Car Rent",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/owl.carousel.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/slicknav.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/flaticon.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/hamburgers.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/progressbar_barfiller.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/gijgo.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/animate.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/animated-headline.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/magnific-popup.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/fontawesome-all.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/themify-icons.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/slick.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/nice-select.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/style.css",
      },
    ],
    script: [
      {
        src: "./assets/js/vendor/modernizr-3.5.0.min.js",
        body: true,
      },
      {
        src: "./assets/js/vendor/jquery-1.12.4.min.js",
        body: true,
      },
      {
        src: "./assets/js/popper.min.js",
        body: true,
      },
      {
        src: "./assets/js/bootstrap.min.js",
        body: true,
      },
      {
        src: "./assets/js/jquery.slicknav.min.js",
        body: true,
      },
      {
        src: "./assets/js/owl.carousel.min.js",
        body: true,
      },
      {
        src: "./assets/js/slick.min.js",
        body: true,
      },
      {
        src: "./assets/js/wow.min.js",
        body: true,
      },
      {
        src: "./assets/js/animated.headline.js",
        body: true,
      },
      {
        src: "./assets/js/jquery.magnific-popup.js",
        body: true,
      },
      {
        src: "./assets/js/gijgo.min.js",
        body: true,
      },
      {
        src: "./assets/js/jquery.nice-select.min.js",
        body: true,
      },
      {
        src: "./assets/js/jquery.sticky.js",
        body: true,
      },
      {
        src: "./assets/js/jquery.barfiller.js",
        body: true,
      },
      {
        src: "./assets/js/jquery.counterup.min.js",
        body: true,
      },
      {
        src: "./assets/js/waypoints.min.js",
        body: true,
      },
      {
        src: "./assets/js/jquery.countdown.min.js",
        body: true,
      },
      {
        src: "./assets/js/hover-direction-snake.min.js",
        body: true,
      },
      {
        src: "./assets/js/main.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/device", "@nuxtjs/moment"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],
  markdownit: {
    injected: true,
  },
  device: {
    refreshOnResize: true,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
