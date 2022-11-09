<template>
  <div class="gallery-area section-padding40">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6">
          <div class="section-tittle mb-50">
            <h2>With my camera, I capture daily life</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-tittle mb-60">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursu.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div
          v-for="item in galleries"
          :key="item.id"
          class="col-xl-5 col-lg-5 col-md-6 col-sm-6"
        >
          <div class="box snake mb-30">
            <div
              class="gallery-img small-img"
              :style="`background-image: url(${item.asset})`"
            ></div>
            <figcaption>{{ item.heading }}</figcaption>
            <div class="overlay">
              <div class="overlay-content">
                <a :href="item.asset" class="img-pop-up"
                  ><i class="ti-plus"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="section-btn text-center mt-50">
            <a href="#" class="border-btn">More Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleries: [
        {
          id: 1,
          heading: "Travelshots",
          asset: require("~/assets/img/gallery/gallery1.png"),
        },
        {
          id: 2,
          heading: "Experimental",
          asset: require("~/assets/img/gallery/gallery2.png"),
        },
        {
          id: 3,
          heading: `Father's Day`,
          asset: require("~/assets/img/gallery/gallery3.png"),
        },
        {
          id: 4,
          heading: `Curious Cats`,
          asset: require("~/assets/img/gallery/gallery4.png"),
        },
      ],
    };
  },

  mounted() {
    this.setUpPopup();
  },

  methods: {
    setUpPopup() {
      let popUp = $(".single_gallery_part, .img-pop-up");
      if (popUp.length) {
        popUp.magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
      }
    },
  },
};
</script>
