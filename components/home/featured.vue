<style lang="scss" scoped>
@import "~/assets/scss/card-price.scss";
</style>

<template>
  <section class="ftco-section ftco-featured ftco-no-pt bg-light" id="pricing">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-md-12 heading-section text-center ftco-animate mb-2"
          style="margin-top: 3rem"
        >
          <span class="subheading">What we offer</span>
          <h2>Feeatured Vehicles</h2>
        </div>
      </div>

      <div class="row justify-content-start">
        <div class="col-lg-12 col-sm-12 mt-5 text-center">
          <h4>
            {{
              dropTripCategory.name === "drop trip"
                ? "Drop Trip Bandung - Jakarta (Bandara Soetta)"
                : ""
            }}
          </h4>
          <blockquote>
            {{ dropTripCategory.description }}
          </blockquote>
        </div>
        <div class="col-lg-12 col-sm-12">
          <div class="row">
            <div
              v-for="item in dropTrips"
              :key="item.id"
              class="col-md-4 col-sm-12 card__column"
            >
              <div
                :style="`${
                  $device.isMobile
                    ? 'margin: 0.5rem;'
                    : 'margin: 0.5rem;padding: 5rem;'
                }`"
                class="card__collection clear-fix"
              >
                <div
                  :style="`${
                    $device.isMobile ? 'margin: 1.3rem;' : 'margin: 1.3rem;'
                  }`"
                  class="cards cards--three"
                >
                  <img :src="item.image.url" class="img-responsive" alt="" />
                  <span class="cards--three__rect-1">
                    <span class="shadow-1"> </span>
                    <p>{{ item.name }}</p>
                    <p class="ml-1">
                      <b>{{ item.price.formatted_with_symbol }}</b>
                    </p>
                  </span>
                  <span class="cards--three__rect-2">
                    <span class="shadow-2"></span>
                  </span>
                  <span class="cards--three__circle"></span>
                  <ul class="cards--three__list">
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-linkedin-in"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-start">
        <div class="col-lg-12 col-sm-12 mt-5 text-center">
          <h4>
            {{
              cityTourCategory.name === "city tour"
                ? "City Tour Destinasi Wisata Di Kota Kembang"
                : ""
            }}
          </h4>
          <blockquote>
            {{ cityTourCategory.description }}
          </blockquote>
        </div>
        <div class="col-lg-12 col-sm-12">
          <div class="row">
            <div
              v-for="item in cityTours"
              :key="item.id"
              class="col-md-4 col-sm-12 card__column"
            >
              <div
                :style="`${
                  $device.isMobile
                    ? 'margin: 0.7rem;'
                    : 'margin: 0.5rem;padding: 5rem;width: 500px;'
                }`"
                class="card__collection clear-fix"
              >
                <div
                  :style="`${
                    $device.isMobile ? 'margin: 1.3rem;' : 'margin: 1.3rem;'
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["dropTrips", "cityTours", "categories"],

  mounted() {
    console.log(this.dropTripCategory);
    console.log(this.cityTourCategory);
  },

  computed: {
    dropTripCategory() {
      const lists = this.categories.map((d) => d);
      return lists.filter((d) => d.name === "drop trip")[0];
    },
    cityTourCategory() {
      const lists = this.categories.map((d) => d);
      return lists.filter((d) => d.name === "city tour")[0];
    },
  },
};
</script>
