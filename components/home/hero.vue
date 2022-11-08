<template>
  <div class="slider-area">
    <div class="slider-item-active">
      <div v-for="item in sliders" :key="item.id" class="slider-item">
        <div
          :class="`slider-bg${item.id} slider-height hero-overly slider-bg1 d-flex align-items-center`"
          :style="`background-image: url(${item.bg});`"
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-9 col-lg-10">
                <div class="slide-content">
                  <h1>{{ item.heading }}</h1>
                  <img :src="item.assets" alt="" />
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
          heading: "New Journey",
          bg: require("~/assets/img/hero/hero1.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                <dd>01</dd>
                <span>Travel pro</span>
              </h4>
              <p>
                Etiam tristique, metus pretium rutrum elementumv, risus tortor.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot1.png"),
        },
        {
          id: 2,
          heading: "Photography",
          bg: require("~/assets/img/hero/hero2.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                <dd>02</dd>
                <span>Travel pro</span>
              </h4>
              <p>
                Etiam tristique, metus pretium rutrum elementumv, risus tortor.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot2.png"),
        },
        {
          id: 3,
          heading: "Photography",
          bg: require("~/assets/img/hero/hero3.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                  <dd>03</dd>
                  <span>Travel pro</span>
              </h4>
              <p>
                Etiam tristique, metus pretium rutrum elementumv, risus tortor.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot3.png"),
        },
        {
          id: 4,
          heading: "Photography",
          bg: require("~/assets/img/hero/hero4.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                  <dd>03</dd>
                  <span>Travel pro</span>
              </h4>
              <p>
                Etiam tristique, metus pretium rutrum elementumv, risus tortor.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot4.png"),
        },
        {
          id: 5,
          heading: "Photography",
          bg: require("~/assets/img/hero/hero5.png"),
          assets: require("~/assets/img/icon/signature.png"),
          content: `
              <h4>
                  <dd>03</dd>
                  <span>Travel pro</span>
              </h4>
              <p>
                Etiam tristique, metus pretium rutrum elementumv, risus tortor.
              </p>
          `,
          thumb: require("~/assets/img/hero/hero-dot5.png"),
        },
      ],
    };
  },
};
</script>
