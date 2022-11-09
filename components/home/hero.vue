<template>
  <div class="slider-area">
    <div class="slider-item-active">
      <div v-for="item in sliders" :key="item.id" class="slider-item">
        <div
          :class="`slider-bg1 slider-height hero-overly slider-bg1 d-flex align-items-center`"
          :style="`background-image: url(${item.bg});`"
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-9 col-lg-10">
                <div class="slide-content">
                  <h1>
                    {{ item.heading }}
                  </h1>
                  <!-- <img :src="item.assets" alt="" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Footer Content -->
        <div class="slider-caption2">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-7 col-sm-8">
                <div class="slide-content2" v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Dot - image -->
    <div class="slider-nav text-center">
      <div v-for="item in sliders" :key="item.id" class="slider-thumb">
        <img :src="item.thumb" alt="" />
      </div>
    </div>
  </div>
  <!-- End Start slider -->
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        {
          id: 1,
          heading: "D & N Tour",
          bg: require("~/assets/img/hero/hero4.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                  <dd>01</dd>
                  <span>D & N Rental Car</span>
              </h4>
              <p>
                Dengan armada yang selalu siap dan selalu terakomodasi dalam memenuhi perjalanan Anda maupun Keluarga.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot4.png"),
        },

        {
          id: 2,
          heading: "New Journey",
          bg: require("~/assets/img/hero/hero1.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                <dd>02</dd>
                <span>D & N Tour Travel</span>
              </h4>
              <p>
                Menjadi partner handal bagi Anda yang mengejar waktu tempuh.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot1.png"),
        },
        {
          id: 3,
          heading: "New Trip",
          bg: require("~/assets/img/hero/hero2.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                <dd>03</dd>
                <span>Discover the Colorful Your Trip</span>
              </h4>
              <p>
                Tidak perlu lagi cemas akan estimasi perjalanan Anda untuk mengejar waktu keberangkatan pesawat  <br /> Bandung - Jakarta Ke bandara dengan jarak tempuh yang bisa di andalkan .
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot2.png"),
        },
        {
          id: 4,
          heading: "Save Your Time",
          bg: require("~/assets/img/hero/hero3.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                  <dd>04</dd>
                  <span>Enjoy Your Travel Time</span>
              </h4>
              <p>
                D & N Tour Travel - Car Rent. Dengan armada yang selalu siap dan selalu terakomodasi dalam memenuhi perjalanan Anda maupun Keluarga.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot3.png"),
        },
        {
          id: 5,
          heading: "New History",
          bg: require("~/assets/img/hero/hero5.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                  <dd>05</dd>
                  <span>D & N Rental Tour - Travel Pro</span>
              </h4>
              <p>
                Menjadi bagian dari perjalanan Anda dan Keluarga Anda, kami selalu mengutamakan ketepatan, kenyamanan dan keselamatan Anda dan Keluarga.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot5.png"),
        },
      ],
    };
  },
  mounted() {
    this.activeSlick();
  },
  methods: {
    activeSlick() {
      // index-2
      $(".slider-item-active").slick({
        slidesToShow: 1,
        loop: true,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",
      });
      $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        arrows: false,
        infinite: true,
        asNavFor: ".slider-item-active",
        dots: false,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
      });
    },
  },
};
</script>
