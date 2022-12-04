<template>
  <section
    class="ftco-section hero-wrap ftco-degree-bg"
    :style="`background-image: url('${
      $device.isDesktop
        ? hero.singleMedia.fields.file.url
        : hero.responsiveImage.fields.file.url
    }')`"
    data-stellar-background-ratio="0.5"
    id="home"
  >
    <div class="overlay"></div>
    <div class="container">
      <div
        style="margin-top: -4rem"
        class="row no-gutters slider-text justify-content-end align-items-center"
      >
        <div v-if="!params" class="col-lg-6 ftco-animate">
          <div class="text w-100 text-center mb-md-5 pb-md-5">
            <h1 class="mb-4" style="font-family: 'Rubik Bubbles', cursive">
              {{ hero.captionHead }}
            </h1>
            <p style="font-size: 18px">{{ hero.slogan }}</p>
            <a
              v-if="$device.isDesktop"
              :href="hero.linkVideo"
              class="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="ion-ios-play"></span>
              </div>
              <div class="heading-title ml-5">
                <span>{{ hero.blockquoteText }}</span>
              </div>
            </a>
            <a
              v-else
              :href="hero.linkVideoEmbed"
              style="cursor: pointer"
              class="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span class="ion-ios-play"></span>
              </div>
              <div class="heading-title ml-5">
                <span>{{ hero.blockquoteText }}</span>
              </div>
            </a>
          </div>
        </div>
        <div v-else class="col-lg-6">
          <div class="text w-100 text-center mb-md-5 pb-md-5">
            <a
              href="/#pricing"
              class="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center"
            >
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <span
                  class="ion-ios-arrow-dropleft"
                  style="font-size: 34px"
                ></span>
              </div>
              <div class="heading-title ml-5">
                <span>Kembali ke Home</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      params: null,
    };
  },
  mounted() {
    // console.log(this.hero);
    this.heroAnimate();
    this.popupVideo();
    this.popupVideoMobile();
    this.detectRouteParams();
  },
  methods: {
    detectRouteParams() {
      const params = this.$route.params.permalink;
      if (params) {
        this.params = true;
      }
    },
    popupVideoMobile() {
      $(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: false,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,
        fixedBgPos: false,
        fixedContentPos: false,
      });
    },
    popupVideo() {
      $(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,
        fixedBgPos: true,
        fixedContentPos: true,
      });
    },
    heroAnimate() {
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
    },
    getHeroBanner() {
      const hero = this.$store.state.hero;
      return hero;
    },
  },
  computed: {
    hero() {
      const contents = this.$store.state.hero.map((d) => d.fields);
      const hero = contents.filter((d) => d.title === "hero banner")[0];
      return hero;
    },
  },
};
</script>

<style lang="css" scoped>
ion-icon {
  font-size: 64px;
}
</style>
