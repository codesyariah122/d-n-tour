<style lang="scss" scoped>
.featured-section {
  margin-top: -3rem;
  margin-bottom: 5rem;
}

@media (min-width: 992px) {
  .featured-section {
    margin-top: -5rem;
    margin-bottom: 3rem;
  }
}
</style>

<style lang="css" scoped>
.current {
  background-color: #0d6efd;
  color: #fff;
}
.active {
  background-color: #0d6efd;
  color: #fff;
}
li > .hover {
  border: 8px solid;
  border-image: repeating-linear-gradient(
      135deg,
      #f8ca00 0 10px,
      #e97f02 0 20px,
      #bd1550 0 30px
    )
    8;
  -webkit-mask: conic-gradient(
        from 180deg at top 8px right 8px,
        #0000 90deg,
        #000 0
      )
      var(--_i, 200%) 0 /200% var(--_i, 8px) border-box no-repeat,
    conic-gradient(at bottom 8px left 8px, #0000 90deg, #000 0) 0
      var(--_i, 200%) / var(--_i, 8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: 0.3s, -webkit-mask-position 0.3s 0.3s;
}
.hover:hover {
  --_i: 100%;
  color: #cc333f;
  transition: 0.3s, -webkit-mask-size 0.3s 0.3s;
}
</style>

<template>
  <section class="ftco-section featured-section" id="pricing">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 heading-section text-center ftco-animate mb-2">
          <span class="subheading">What we offer</span>
          <h2>Feeatured Vehicles</h2>
        </div>
      </div>
      <div
        :class="`${
          $device.isDesktop
            ? 'row justify-content-center ml-5 mt-5'
            : 'row justify-content-center mt-2'
        }`"
      >
        <div class="col-lg-12">
          <div class="card mb-3 border-0" style="max-width: 100%">
            <div class="row g-0">
              <div
                :class="`${$device.isDesktop ? 'col-md-4' : 'col-md-4 mb-5'}`"
              >
                <ul class="list-group border border-5">
                  <li
                    v-for="(item, index) in menus"
                    :key="item.id"
                    :class="activeIndex === index ? 'current' : 'hover'"
                    class="list-group-item border-0 text-capitalize fs-4"
                    role="button"
                    @click="selectedPackage(item.name, index)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                    <div
                      v-if="loadingPackage"
                      class="col-lg-12 col-sm-12 mt-2 text-center"
                    >
                      <div class="row justify-center">
                        <div class="col-lg-12 col-sm-12">
                          <h2 class="text-lead text-bold">Wait loading ...</h2>
                          <img
                            :src="require('~/assets/vector/loading-car.gif')"
                            class="img-fluid rounded-circle"
                            :width="`${$device.isMobile ? '250' : '150'}`"
                          />
                        </div>
                        <div
                          class="col-md-4 col-sm-12 mb-5"
                          v-for="item in menus.length"
                          :key="item"
                        >
                          <div class="card" aria-hidden="true">
                            <img
                              :src="
                                require('~/assets/images/loader/placeholder.webp')
                              "
                              class="card-img-top"
                              alt="default-card-placeholder"
                            />
                            <div class="card-body">
                              <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                              </h5>
                              <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                              </p>
                              <a
                                href="#"
                                tabindex="-1"
                                class="btn btn-primary disabled placeholder col-6"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else class="col-lg-12 col-sm-12 text-center">
                      <div v-if="notChange" class="row justify-content-center">
                        <div
                          class="col-lg-6 col-sm-6"
                          :style="`${$device.isMobile ? 'width: 90%;' : ''}`"
                        >
                          <div class="alert alert-danger" role="alert">
                            Silahkan pilih terlebih dahulu paket trip yang
                            tersedia !!
                          </div>
                        </div>
                      </div>
                      <div v-else class="row justify-content-center">
                        <div
                          class="col-lg-12 col-sm-12"
                          style="margin-top: -2rem"
                        >
                          <h4>
                            {{ categoryContext.header }}
                          </h4>

                          <blockquote>
                            {{ categoryContext.quote }}
                          </blockquote>
                        </div>

                        <div class="col-lg-12 col-sm-12 mt-5">
                          <div class="row justify-content-center">
                            <div
                              v-for="item in packages"
                              :key="item.id"
                              class="col-md-4 col-sm-12 mb-5"
                            >
                              <div
                                class="card"
                                :style="`${
                                  $device.isMobile
                                    ? 'width: 100%'
                                    : 'width: 13rem;'
                                }`"
                              >
                                <img
                                  :src="item.image.url"
                                  class="card-img-top"
                                  :alt="item.name"
                                />
                                <div class="card-body">
                                  <h5 class="card-title">{{ item.name }}</h5>

                                  <p class="card-text mb-2">
                                    {{ $format(item.price.raw) }}
                                  </p>
                                  <!-- <a
                                    :href="`/details/${item.permalink}`"
                                    class="btn btn-primary btn-block"
                                    >Detail</a
                                  > -->
                                  <button
                                    @click="showDetailPackage(item)"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    class="btn btn-primary btn-block"
                                  >
                                    Detail
                                  </button>
                                  <button
                                    @click="pickUp(item)"
                                    class="btn btn-outline-primary btn-block btn-sm mt-3"
                                    type="button"
                                  >
                                    Order Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row justify-center">
                            <div class="col-lg-12 col-sm-12">
                              <ul>
                                <li class="fw-bold font-monospace">
                                  Termasuk : mobil + sopir + bbm + tol + parkir
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- modal detail -->

                      <div class="row">
                        <div class="col-lg-12">
                          <div
                            class="modal fade"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabindex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-scrollable">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title text-capitalize"
                                    id="staticBackdropLabel"
                                  >
                                    {{ detail.name }}
                                  </h5>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <div
                                    class="card mb-3 border-0"
                                    style="max-width: 100%"
                                  >
                                    <div class="row g-0 justify-start">
                                      <div class="col-md-4">
                                        <img
                                          :src="detailImage"
                                          class="img-fluid rounded-start"
                                          :alt="detail.name"
                                        />
                                      </div>
                                      <div class="col-md-8">
                                        <div class="card-body">
                                          <h6 class="text-muted float-left">
                                            {{ $format(detailPrice) }}
                                          </h6>
                                          <br />
                                          <div
                                            class="float-start bd-highlight mb-3"
                                          >
                                            <span
                                              class="badge bg-primary text-capitalize"
                                            >
                                              {{ detailCategory }}
                                            </span>
                                          </div>
                                          <br />
                                          <p
                                            class="card-text text-left"
                                            v-html="detail.description"
                                          ></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    @click="pickUp(detail)"
                                    class="btn btn-primary"
                                    type="button"
                                  >
                                    Order Now !
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["privateDropTrips", "regulerDropTrips", "cityTours", "categories"],
  data() {
    return {
      notChange: null,
      showSelected: false,
      loadingPackage: null,
      packages: [],
      categoryContext: {
        header: null,
        quote: null,
      },
      detail: {},
      detailImage: "",
      detailCategory: "",
      detailPrice: "",
      activeIndex: 0,
      active: false,
      current: null,
    };
  },

  mounted() {
    this.setUpCurrent();
  },

  methods: {
    showDetailPackage(item) {
      console.log(item);
      this.detail = item;
      this.detailImage = item?.image?.url;
      this.detailCategory = item?.categories.map((d) => d.name)[0];
      this.detailPrice = item?.price?.raw;
    },
    pickUp(item) {
      const url = `https://wa.me/${process.env.NUXT_ENV_DNTOUR_CONTACT_PHONE}?text=`;
      const contextWa = `Hallo,Admin D&N Tour, saya ingin memesan paket trip ${item?.categories[0]?.name} - Armada ${item?.name} Dari D & N Tour `;

      window.open(`${url}${encodeURIComponent(contextWa)}`);
    },
    selectedPackage(value, index) {
      this.showSelected = true;
      this.loadingPackage = true;
      this.notChange = false;
      this.activeIndex = index;

      switch (value) {
        case "private carter":
          setTimeout(() => {
            this.loadingPackage = false;
            this.packages = this.privateDropTrips;
            this.categoryContext.header =
              this.privateDropTripCategory.name === "private charter"
                ? "Private Bandung - Jakarta (Bandara Soetta)"
                : "";
            this.categoryContext.quote =
              this.privateDropTripCategory.name === "private charter"
                ? "Melayani Penjemputan Untuk Perjalanan Bandung - Jakarta (Bandara Soekarno Hatta) Secara private."
                : "";
          }, 5000);
          break;

        case "reguler":
          setTimeout(() => {
            this.next = true;
            this.loadingPackage = false;
            this.packages = this.regulerDropTrips;
            this.categoryContext.header =
              this.regulerDropTripCategory.name === "reguler"
                ? "Reguler Trip Bandung - Jakarta (Bandara Soetta)"
                : "";
            this.categoryContext.quote =
              this.regulerDropTripCategory.name === "reguler"
                ? "Melayani Perjalanan Reguler Bandung - Jakarta (Bandara Soekarno Hatta)"
                : "";
          }, 1000);
          break;

        case "city tour":
          setTimeout(() => {
            this.loadingPackage = false;
            this.packages = this.cityTours;
            this.categoryContext.header =
              this.cityTourCategory.name === "city tour"
                ? "City Tour Destinasi Wisata Di Kota Kembang"
                : "";
            this.categoryContext.quote = this.cityTourCategory.description;
          }, 1000);
          break;

        default:
          console.log("Pilih paket terlebih dahulu!!");
          setTimeout(() => {
            this.loadingPackage = false;
            this.packages = [];
            this.categoryContext.header = null;
            this.categoryContext.quote = null;
            this.notChange = true;
          }, 1000);
      }
    },
    setUpCurrent() {
      if (this.activeIndex === 0) {
        this.loadingPackage = true;
        setTimeout(() => {
          this.loadingPackage = false;
          this.packages = this.cityTours;
          this.categoryContext.header =
            this.cityTourCategory.name === "city tour"
              ? "City Tour Destinasi Wisata Di Kota Kembang"
              : "";
          this.categoryContext.quote = this.cityTourCategory.description;
        }, 2500);
      }
    },
  },

  computed: {
    parentCategories() {
      const lists = this.categories.map((d) => d);
      const parents = lists.map((d) => (d.name === "city tour" ? d : 0))[0];
      return parents;
    },
    menus() {
      const lists = this.categories.map((d) => d);
      const listsMenu = [];
      const childs = lists.map((d) =>
        d.children.length > 0 ? d.children : d
      )[1];
      const parents = lists.map((d) => d).filter((d) => d.name === "city tour");
      const menus = parents.concat(childs);
      return menus;
    },
    privateDropTripCategory() {
      const lists = this.categories.map((d) => d);
      const privates = lists.map((d) => d.children)[1];
      const privateDropTrip = privates.filter(
        (d) => d.name === "private charter"
      )[0];
      return privateDropTrip;
      // return lists.filter((d) => d.name === "private")[0];
    },
    regulerDropTripCategory() {
      const lists = this.categories.map((d) => d);
      const regulers = lists.map((d) => d.children)[1];
      const regulerDropTrip = regulers.filter((d) => d.name === "reguler")[0];
      return regulerDropTrip;
    },
    cityTourCategory() {
      const lists = this.categories.map((d) => d);
      return lists.filter((d) => d.name === "city tour")[0];
    },
  },
};
</script>
