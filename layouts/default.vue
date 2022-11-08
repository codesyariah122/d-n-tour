<template>
  <div>
    <globals-loader />
    <layout-header />
    <Nuxt />
    <layout-footer />
    <globals-backtop />
  </div>
</template>
<script>
export default {
  head() {
    return {
      link: [
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
          src: "/assets/js/vendor/modernizr-3.5.0.min.js",
          body: true,
        },
        {
          src: "/assets/js/vendor/jquery-1.12.4.min.js",
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
          src: "/assets/js/jquery.slicknav.min.js",
          body: true,
        },
        {
          src: "/assets/js/owl.carousel.min.js",
          body: true,
        },
        {
          src: "/assets/js/slick.min.js",
          body: true,
        },
        {
          src: "/assets/js/wow.min.js",
          body: true,
        },
        {
          src: "/assets/js/animated.headline.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.magnific-popup.js",
          body: true,
        },
        {
          src: "/assets/js/gijgo.min.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.nice-select.min.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.sticky.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.barfiller.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.counterup.min.js",
          body: true,
        },
        {
          src: "/assets/js/waypoints.min.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.countdown.min.js",
          body: true,
        },
        {
          src: "/assets/js/hover-direction-snake.min.js",
          body: true,
        },
        {
          src: "/assets/js/contact.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.form.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.validate.min.js",
          body: true,
        },
        {
          src: "/assets/js/mail-script.js",
          body: true,
        },
        {
          src: "/assets/js/jquery.ajaxchimp.min.js",
          body: true,
        },
        {
          src: "/assets/js/plugins.js",
          body: true,
        },
        {
          src: "/assets/js/main.js",
          body: true,
        },
      ],
    };
  },
};
</script>
