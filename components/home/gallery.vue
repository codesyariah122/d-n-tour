<style lang="scss" scoped>
.box-call {
  margin-bottom: 5rem;
  overflow: hidden;
  .box {
    box-sizing: content-box;
    border: solid grey 1px;
    border-radius: 13px;
    border-style: dashed;
    height: 30vh;
    width: 200px;
    background-color: rgb(245, 72, 72);
    z-index: -1;
    position: absolute;
    margin-top: -1rem;
    margin-left: 1.5rem;
  }
  .img {
    z-index: 3;
    margin-left: -5rem;
    margin-top: 0.8rem;
  }

  .info {
    margin-top: 1rem;
    .info-kontak {
    }
    .info-button {
      button {
        width: 300px;
        height: 40px;
        padding: 7px;
      }
    }
  }
}
@media (min-width: 992px) {
  .box-call {
    margin-bottom: 5rem;
    .box {
      box-sizing: content-box;
      border: solid grey 1px;
      border-radius: 13px;
      border-style: dashed;
      height: 40vh;
      width: 250px;
      background-color: rgb(245, 72, 72);
      z-index: -1;
      position: absolute;
      margin-top: -1rem;
      margin-left: 1.5rem;
    }
    .img {
      z-index: 3;
      margin-left: -0.1rem;
      margin-top: 0.1rem;
    }

    .info {
      margin-top: 0.3rem;
      .info-kontak {
      }
      .info-button {
        margin-top: -1rem;
        margin-left: -1rem;
      }
    }
  }
}
</style>
<template>
  <div class="gallery-area section-padding40">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6 col-sm-12">
          <div class="section-tittle mb-50">
            <div class="row justify-content-start box-call">
              <div class="col box"></div>
              <div class="col img">
                <img
                  :src="require('~/assets/img/gallery/calls/new-avanza.png')"
                  alt=""
                />
              </div>
              <div class="col-lg-12 col-sm-12 mt-2 mb-5">
                <div
                  v-if="$device.isDesktop"
                  class="row justify-content-start info"
                >
                  <div class="col-1 mt-2">
                    <h1>
                      <i
                        class="fas fa-phone-square-alt fa-fw fa-lg text-danger"
                      ></i>
                    </h1>
                  </div>
                  <div class="col-4 info-kontak">
                    <h4
                      class="font-weight-normal"
                      style="font-family: 'Courier New', Courier, monospace"
                    >
                      D & N Tour Travel
                    </h4>
                    <h4
                      class="font-weight-bold"
                      style="font-family: 'Courier New', Courier, monospace"
                    >
                      +62 831 6553 9138
                    </h4>
                  </div>
                  <div class="col-6 info-button">
                    <button
                      @click="bookOrder"
                      class="btn btn-danger btn-rounded btn-sm"
                    >
                      <i
                        class="fas fa-bookmark fa-fw fa-lg"
                        style="font-size: 23px"
                      ></i>
                      Book Now
                    </button>
                  </div>
                </div>
                <div v-else class="row justify-content-center info">
                  <div class="col-sm-12 info-kontak">
                    <div class="d-flex mt-3">
                      <div class="col-3">
                        <i
                          style="font-size: 37px; margin-top: 1rem"
                          class="fas fa-phone-square-alt fa-fw fa-lg text-danger"
                        ></i>
                      </div>
                      <div class="col-12" style="margin-left: -2rem">
                        <h3
                          class="font-weight-normal"
                          style="font-family: 'Courier New', Courier, monospace"
                        >
                          D & N Tour Travel
                        </h3>
                        <h3
                          class="font-weight-bold"
                          style="font-family: 'Courier New', Courier, monospace"
                        >
                          +62 831 6553 9138
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 info-button mt-5">
                    <button
                      @click="bookOrder"
                      class="btn btn-danger btn-rounded btn-sm btn-block"
                    >
                      <i
                        class="fas fa-bookmark fa-fw fa-lg"
                        style="font-size: 23px"
                      ></i>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-tittle mb-60">
            <h2>D & N Tour Travel</h2>
            <p>
              D & N Tour Travel - menyediakan jasa layanan antar jemput terbaik
              untuk perjalanan Bandung - Jakarta (Bandara) dan Bandung city
              tour.
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
          asset: require("~/assets/img/gallery/new/galeri1.jpeg"),
        },
        {
          id: 2,
          heading: "Experimental",
          asset: require("~/assets/img/gallery/new/galeri2.jpeg"),
        },
        {
          id: 3,
          heading: `Father's Day`,
          asset: require("~/assets/img/gallery/new/galeri3.jpeg"),
        },
        {
          id: 4,
          heading: `Curious Cats`,
          asset: require("~/assets/img/gallery/new/galeri4.jpeg"),
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
    bookOrder() {
      this.$emit("book-order");
    },
  },
};
</script>
