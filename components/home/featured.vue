<style lang="scss" scoped>
@import "~/assets/scss/card-price.scss";
.featured-section {
  margin-top: 2rem;
  margin-bottom: 8rem;
}
</style>
<!-- featured components home -->
<template>
  <section class="ftco-section featured-section" id="pricing">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-12 heading-section text-center ftco-animate mb-2">
          <span class="subheading">What we offer</span>
          <h2>Feeatured Vehicles</h2>
        </div>
      </div>

      <div class="row justify-content-start">
        <div class="col-lg-12 col-sm-10 mt-3 mb-3">
          <div class="row justify-content-center">
            <div
              class="col-lg-8 col-sm-8 mb-2"
              :style="`${$device.isMobile ? 'width: 90%;' : ''}`"
            >
              <blockquote class="text-danger blockquote-footer">
                Pilih daftar paket trip lainnya dibawah ini ....
              </blockquote>
            </div>
            <div class="col-lg-8 col-sm-8">
              <div
                class="input-group"
                :style="`${
                  $device.isMobile ? 'width: 70%; margin-left: 3rem;' : ''
                }`"
              >
                <select
                  @change="selectedPackage($event)"
                  class="custom-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                >
                  <option value="pilih-paket" selected>
                    Paket lainnya ...
                  </option>
                  <option
                    v-for="item in childCategories"
                    :key="item.id"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                  <option :value="parentCategories.name">
                    {{ parentCategories.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="loadingPackage"
        class="d-flex justify-content-center mt-5 mb-3"
      >
        <div class="p-2">
          <img
            :src="require('~/assets/vector/loading-car.gif')"
            class="img-fluid rounded-circle"
            :width="`${$device.isMobile ? '250' : '150'}`"
          />
          <br />
          <p class="text-secondary text-center mt-2">Loading ...</p>
        </div>
      </div>

      <div v-else class="row justify-content-center">
        <div v-if="!showSelected" class="col-lg-12 col-sm-12">
          <div class="row justify-content-start">
            <div class="col-lg-12 col-sm-12 mt-5 text-center">
              <h4>
                {{
                  privateDropTripCategory.name === "private charter"
                    ? "Paket Private Trip Bandung - Jakarta (Bandara Soetta)"
                    : ""
                }}
              </h4>
              <blockquote>
                {{
                  privateDropTripCategory.name === "private charter"
                    ? "Melayani Penjemputan Untuk Perjalanan Bandung - Jakarta (Bandara Soekarno Hatta) Khususnya secara private."
                    : ""
                }}
              </blockquote>
            </div>

            <div class="col-lg-12 col-sm-12 mt-2">
              <div class="row justify-content-center">
                <div
                  v-for="item in privateDropTrips"
                  :key="item.id"
                  class="col-md-4 col-sm-12 card__column"
                >
                  <div
                    :style="`${
                      $device.isMobile
                        ? 'margin: 0;padding: .3rem;left:0;width:100%;'
                        : 'margin-top:2rem;margin: 0;left:10%;padding: 7rem;width: 35vw;overflow-x:hidden;'
                    }`"
                    class="card__collection clear-fix"
                  >
                    <div
                      :style="`${
                        $device.isMobile
                          ? 'margin: 0;width: 100%;left:0;right:0;margin-bottom: .5rem;'
                          : 'margin: -2.5rem;'
                      }`"
                      class="cards cards--two"
                    >
                      <img
                        :src="item.image.url"
                        class="img-responsive"
                        alt="Cards Image"
                      />

                      <span class="cards--two__rect"></span>
                      <span class="cards--two__tri"></span>
                      <p>
                        {{ item.name }} <br />
                        <b>{{ item.price.formatted_with_symbol }}</b>
                        <br />
                        <center>
                          <a
                            :href="`/detail/${item.permalink}`"
                            class="btn btn-success btn-lg"
                          >
                            Pesan Sekarang
                          </a>
                        </center>
                      </p>
                      <ul class="cards__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4 mx-auto">
              <h5 class="text-center">Sudah Termasuk :</h5>
              <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">-Mobil</div>
                <div class="p-2 bd-highlight">-Sopir / Driver</div>
                <div class="p-2 bd-highlight">-BBM</div>
                <div class="p-2 bd-highlight">-Parkir</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="col-lg-12 col-sm-12 mt-2 text-center">
          <div v-if="notChange" class="row justify-content-center">
            <div
              class="col-lg-6 col-sm-6"
              :style="`${$device.isMobile ? 'width: 90%;' : ''}`"
            >
              <div class="alert alert-danger" role="alert">
                Silahkan pilih terlebih dahulu paket trip yang tersedia !!
              </div>
            </div>
          </div>
          <div v-else class="row justify-content-center">
            <div class="col-lg-12 col-sm-12">
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
                  class="col-md-4 col-sm-12 card__column"
                >
                  <div
                    :style="`${
                      $device.isMobile
                        ? 'margin: 0;padding: .3rem;left:0;width:100%;'
                        : 'margin-top:2rem;margin: 0;left:10%;padding: 7rem;width: 35vw;overflow-x:hidden;'
                    }`"
                    class="card__collection clear-fix"
                  >
                    <div
                      :style="`${
                        $device.isMobile
                          ? 'margin: 0;width: 100%;left:0;right:0;margin-bottom: .5rem;'
                          : 'margin: -2.5rem;'
                      }`"
                      class="cards cards--two"
                    >
                      <img
                        :src="item.image.url"
                        class="img-responsive"
                        alt="Cards Image"
                      />

                      <span class="cards--two__rect"></span>
                      <span class="cards--two__tri"></span>
                      <p>
                        {{ item.name }} <br />
                        <b>{{ item.price.formatted_with_symbol }}</b>
                        <br />
                        <center>
                          <a
                            :href="`/detail/${item.permalink}`"
                            class="btn btn-success btn-lg"
                          >
                            Pesan Sekarang
                          </a>
                        </center>
                      </p>
                      <ul class="cards__list">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4 mx-auto">
              <h5 class="text-center">Sudah Termasuk :</h5>
              <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">-Mobil</div>
                <div class="p-2 bd-highlight">-Sopir / Driver</div>
                <div class="p-2 bd-highlight">-BBM</div>
                <div class="p-2 bd-highlight">-Parkir</div>
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
    };
  },
  mounted() {
    // console.log(this.privateDropTrips);
  },

  methods: {
    selectedPackage(e) {
      let value = e.target.value;
      this.showSelected = true;
      this.loadingPackage = true;
      this.notChange = false;
      switch (value) {
        case "private charter":
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
          }, 1500);
          break;

        case "reguler":
          setTimeout(() => {
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
          }, 1500);
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
          }, 1500);
          break;

        default:
          console.log("Pilih paket terlebih dahulu!!");
          setTimeout(() => {
            this.loadingPackage = false;
            this.packages = [];
            this.categoryContext.header = null;
            this.categoryContext.quote = null;
            this.notChange = true;
          }, 1500);
      }
    },
  },

  computed: {
    parentCategories() {
      const lists = this.categories.map((d) => d);
      const parents = lists.map((d) => (d.name === "city tour" ? d : 0))[0];
      return parents;
    },
    childCategories() {
      const lists = this.categories.map((d) => d);
      const childs = lists.map((d) =>
        d.children.length > 0 ? d.children : d
      )[1];
      return childs;
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

<style lang="css">
select option {
  z-index: 3333 !important;
}
select {
  text-transform: capitalize !important;
}
option {
  text-transform: capitalize !important;
}
</style>
