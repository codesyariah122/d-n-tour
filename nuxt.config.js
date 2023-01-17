export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // mode: "universal",
  // ssr: true,
  serverMiddleware: [
    {
      path: "api",
      handler: "~/server/api/index.js",
    },
  ],
  router: {
    middleware: [],
  },
  loading: {
    color: "#01d28e",
    height: "11px",
  },
  generate: {
    dir: "dist",
    // exclude: ["/details"],
    // routes: ["/details/*"],
    cache: {
      ignore: ["renovate.json"],
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "D & N Tour Travel - Travel Bandung - Jakarta(Bandara Soetta)",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        name: "keyword",
        content: "Travel Bandung Bandara",
      },
      {
        name: "description",
        content:
          "D & N Tour Travel | Travel Bandung - Jakarta (Bandara Soekarno Hatta)",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://dntourtravel.com/",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "D & N Tour Travel",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "D & N Tour Travel - Travel Bandung Bandara",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "D & N Tour Travel | Travel Bandung - Jakarta (Bandara Soekarno Hatta)",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/png",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://dntourtravel.com/default-og-image.jpg",
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "600",
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "600",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "amphtml",
        href: process.env.NUXT_ENV_APP_ORIGIN_URL,
      },
      {
        rel: "canonical",
        href: "https://dntourtravel.com/",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap",
      },
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        type: "text/css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/open-iconic-bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/animate.css",
      },

      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/magnific-popup.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/aos.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/ionicons.min.css",
      },

      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/flaticon.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/icomoon.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/style.css",
      },
    ],
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        client: process.env.NUXT_ENV_GOOGLE_ADS_CA,
        crossorigin: "anonymous",
        async: true,
      },

      {
        src: "https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js",
        async: true,
        "custom-element": "amp-auto-ads",
      },

      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
      },
      {
        src: "/assets/scripts/g-tag-manager.js",
      },
      {
        src: "/assets/js/jquery.min.js",
        body: true,
      },
      {
        src: "/assets/js/jquery-migrate-3.0.1.min.js",
        body: true,
      },
      {
        src: "/assets/js/popper.min.js",
        body: true,
      },
      {
        src: "/assets/js/bootstrap.min.js",
        body: true,
      },
      {
        src: "/assets/js/jquery.easing.1.3.js",
        body: true,
      },
      {
        src: "/assets/js/jquery.waypoints.min.js",
        body: true,
      },
      {
        src: "/assets/js/jquery.stellar.min.js",
        body: true,
      },

      {
        src: "/assets/js/jquery.magnific-popup.min.js",
        body: true,
      },
      {
        src: "/assets/js/aos.js",
        body: true,
      },
      {
        src: "/assets/js/jquery.animateNumber.min.js",
        body: true,
      },

      {
        src: "/assets/js/scrollax.min.js",
        body: true,
      },

      {
        src: "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/crisp", mode: "client", ssr: false },
    { src: "~/plugins/owl-carousel", ssr: false },
    { src: "~/plugins/contentful" },
    { src: "~/plugins/hero-banner" },
    { src: "~/plugins/blog" },
    { src: "~/plugins/testimoni" },
    { src: "~/plugins/commerce" },
    { src: "~/plugins/sweetalert" },
    { src: "~/plugins/tel-input" },
    { src: "~/plugins/currency" },
    { src: "~/plugins/vue-tiny-mce", mode: "client", ssr: false },
    { src: "~/plugins/cookie-consent", mode: "client", ssr: false },
  ],

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
    "@nuxtjs/markdownit",
    "@nuxtjs/amp",
  ],

  amp: {
    origin: process.env.NUXT_ENV_APP_ORIGIN_URL || "http://localhost:3000",
    mode: "hybrid",
  },

  markdownit: {
    injected: true,
  },
  device: {
    refreshOnResize: true,
  },
  styleResources: {
    scss: ["~/assets/scss/_app.scss"],
  },
  moment: {
    timezone: true,
    defaultTimezone: "Asias/Jakarta",
    locales: ["id"],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },
  workbox: {
    workboxOptions: {
      skipWaiting: true,
    },
    offline: true,
    // offlineStrategy: 'NetworkFirst',
    // offlinePage: null,
    // offlineAssets: [],
    runtimeCaching: [
      {
        urlPattern: "/assets/css/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "/assets/fonts/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "/assets/img/.*",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "/assets/js/.*",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "/assets/scss/.*",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "/assets/vendor/.*",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
    ],
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: "D & N Tour Travel",
      author: "D & N",
      icon: true,
      canonical: "https://dntourtravel.com/",
      description: "Travel Bandung Bandara.",
      keywords: "D & N Tour Travel | Travel Bandung Bandara",
      ogUrl: "https://dntourtravel.com/",
      ogType: "website",
      ogSiteName: "D & N Tour Travel",
      ogTitle: "D & N Tour Travel",
      ogImage: "/icon-pwa.png",
      ogImageWidth: "600",
      ogImageHeight: "400",
    },
    manifest: {
      lang: "en",
      name: "D & N Tour Travel",
      short_name: "D & N Tour",
      description:
        "D & N Tour Travel Dan City Tour. Melayani Antar Jempun Bandung - Jakarta Bandara Soekarno Hatta, Nikmati perjalanan yang cepat dan pelayanan yang gesit dari kami D & N Tour.",
      start_url: "/",
      lang: "en",
      display: "standalone",
      theme_color: "#000",
      background_color: "#000",
      icons: [
        {
          src: "/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable any",
        },
      ],
    },
  },
  robots: {
    UserAgent: "*",
    Disallow: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
