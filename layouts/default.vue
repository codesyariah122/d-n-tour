<style lang="css">
body.swal2-shown > [aria-hidden="true"] {
  transition: 0.1s filter;
  filter: blur(10px);
}
</style>
<template>
  <div>
    <layout-header :isActive="isActive" />

    <Nuxt />

    <div class="container">
      <no-ssr>
        <amp-auto-ads type="adsense" :data-ad-client="ca_pub">
          <div fallback>No ad appeared</div>
        </amp-auto-ads>
      </no-ssr>
    </div>

    <noscript
      ><iframe
        :src="`https://www.googletagmanager.com/ns.html?id=${g_tag}`"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>

    <iframe
      id="google_esf"
      name="google_esf"
      src="https://googleads.g.doubleclick.net/pagead/html/r20230104/r20190131/zrt_lookup.html"
      style="display: none"
    ></iframe>

    <globals-cookie-box />

    <layout-footer />

    <layout-backtotop />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      ca_pub: process.env.NUXT_ENV_GOOGLE_ADS_CA,
      g_tag: process.env.NUXT_ENV_G_TAG_MANAGER,
      g_analytic_tracking: process.env.NUXT_ENV_GOOGLE_ANALYTIC_TRACKING,
      g_analytic_ua: process.env.NUXT_ENV_GOOGLE_ANALYTIC_UA
    };
  },

  mounted() {
    this.startMainJs();
  },

  methods: {
    setAnalytics() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', this.g_analytic_tracking);
    },

    setTagAnalytics() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', this.g_analytic_ua);
    },
    
    navSmoothLink() {
      const navLinks = document.querySelectorAll(".nav-link");

      for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
          navLinks[n].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(navLinks[n].hash).scrollIntoView({
              behavior: "smooth",
            });
          });
        }
      }
    },

    gtmStart() {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", this.g_tag);
    },

    startMainJs() {
      AOS.init({
        duration: 800,
        easing: "slide",
      });

      (function ($) {
        "use strict";

        var isMobile = {
          Android: function () {
            return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
          },
          any: function () {
            return (
              isMobile.Android() ||
              isMobile.BlackBerry() ||
              isMobile.iOS() ||
              isMobile.Opera() ||
              isMobile.Windows()
            );
          },
        };

        $(window).stellar({
          responsive: true,
          parallaxBackgrounds: true,
          parallaxElements: true,
          horizontalScrolling: false,
          hideDistantElements: false,
          scrollProperty: "scroll",
        });

        var fullHeight = function () {
          $(".js-fullheight").css("height", $(window).height());
          $(window).resize(function () {
            $(".js-fullheight").css("height", $(window).height());
          });
        };
        fullHeight();

        // loader
        var loader = function () {
          setTimeout(function () {
            if ($("#ftco-loader").length > 0) {
              $("#ftco-loader").removeClass("show");
            }
          }, 1);
        };
        loader();

        // Scrollax
        $.Scrollax();

        $("nav .dropdown").hover(
          function () {
            var $this = $(this);
            // 	 timer;
            // clearTimeout(timer);
            $this.addClass("show");
            $this.find("> a").attr("aria-expanded", true);
            // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
            $this.find(".dropdown-menu").addClass("show");
          },
          function () {
            var $this = $(this);
            // timer;
            // timer = setTimeout(function(){
            $this.removeClass("show");
            $this.find("> a").attr("aria-expanded", false);
            // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
            $this.find(".dropdown-menu").removeClass("show");
            // }, 100);
          }
        );

        $("#dropdown04").on("show.bs.dropdown", function () {
          console.log("show");
        });

        // scroll
        var scrollWindow = function () {
          $(window).scroll(function () {
            var $w = $(this),
              st = $w.scrollTop(),
              navbar = $(".ftco_navbar"),
              sd = $(".js-scroll-wrap");

            if (st > 150) {
              if (!navbar.hasClass("scrolled")) {
                navbar.addClass("scrolled");
              }
            }
            if (st < 150) {
              if (navbar.hasClass("scrolled")) {
                navbar.removeClass("scrolled sleep");
              }
            }
            if (st > 350) {
              if (!navbar.hasClass("awake")) {
                navbar.addClass("awake");
              }

              if (sd.length > 0) {
                sd.addClass("sleep");
              }
            }
            if (st < 350) {
              if (navbar.hasClass("awake")) {
                navbar.removeClass("awake");
                navbar.addClass("sleep");
              }
              if (sd.length > 0) {
                sd.removeClass("sleep");
              }
            }
          });
        };
        scrollWindow();

        var isMobile = {
          Android: function () {
            return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
          },
          any: function () {
            return (
              isMobile.Android() ||
              isMobile.BlackBerry() ||
              isMobile.iOS() ||
              isMobile.Opera() ||
              isMobile.Windows()
            );
          },
        };

        var counter = function () {
          $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
            function (direction) {
              if (
                direction === "down" &&
                !$(this.element).hasClass("ftco-animated")
              ) {
                var comma_separator_number_step =
                  $.animateNumber.numberStepFactories.separator(",");
                $(".number").each(function () {
                  var $this = $(this),
                    num = $this.data("number");
                  // console.log(num);
                  $this.animateNumber(
                    {
                      number: num,
                      numberStep: comma_separator_number_step,
                    },
                    7000
                  );
                });
              }
            },
            { offset: "95%" }
          );
        };
        counter();

        var contentWayPoint = function () {
          var i = 0;
          $(".ftco-animate").waypoint(
            function (direction) {
              if (
                direction === "down" &&
                !$(this.element).hasClass("ftco-animated")
              ) {
                i++;

                $(this.element).addClass("item-animate");
                setTimeout(function () {
                  $("body .ftco-animate.item-animate").each(function (k) {
                    var el = $(this);
                    setTimeout(
                      function () {
                        var effect = el.data("animate-effect");
                        if (effect === "fadeIn") {
                          el.addClass("fadeIn ftco-animated");
                        } else if (effect === "fadeInLeft") {
                          el.addClass("fadeInLeft ftco-animated");
                        } else if (effect === "fadeInRight") {
                          el.addClass("fadeInRight ftco-animated");
                        } else {
                          el.addClass("fadeInUp ftco-animated");
                        }
                        el.removeClass("item-animate");
                      },
                      k * 50,
                      "easeInOutExpo"
                    );
                  });
                }, 100);
              }
            },
            { offset: "95%" }
          );
        };
        contentWayPoint();

        // navigation
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
        OnePageNav();

        // magnific popup
        $(".image-popup").magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            verticalFit: true,
          },
          zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
          },
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false,
        });
      })(jQuery);
    },
  },
};
</script>
