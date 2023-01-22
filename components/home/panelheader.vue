<template>
  <section
    :style="`${$device.isMobile ? 'margin-left: -.7rem;margin-top:5rem;' : ''}`"
    class="ftco-section ftco-no-pt bg-light"
  >
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-12 featured-top">
          <div class="row no-gutters">
            <div class="col-md-4 d-flex align-items-center">
              <form @submit.prevent="pickUp" class="request-form bg-primary">
                <h2>Make your trip</h2>
                <div class="form-group">
                  <label for="paket" class="label">Berangkat Dari</label>
                  <Select2
                    class="js-example-placeholder-single"
                    style="width: 100%"
                    :options="points"
                    :settings="settings"
                    @change="changePickPoints($event)"
                    @select="selectedPickPoints($event)"
                  />
                </div>
                <div class="form-group">
                  <label for="paket" class="label">Tujuan Ke</label>

                  <Select2
                    class="js-example-placeholder-single"
                    style="width: 100%"
                    :options="goes"
                    :settings="settings"
                    @change="changePickDestination($event)"
                    @select="selectedPickDestination($event)"
                  />
                </div>
                <div class="form-group mt-3">
                  <!-- <pre>
                    {{ packages }}
                  </pre> -->
                  <label for="paket" class="label">Pilih Paket Trip</label>
                  <select
                    id="paket"
                    class="custom-select text-capitalize"
                    @change="changePackage($event)"
                  >
                    <option disabled selected>Pilih Paket Trip</option>

                    <optgroup
                      v-for="(item, idx) in packages"
                      :key="idx"
                      :label="item.text"
                    >
                      <option
                        v-for="packageIndex in showToPackage"
                        :key="packageIndex - 1"
                        :value="[
                          item.text,
                          item.childrens[packageIndex - 1].name,
                          $format(item.childrens[packageIndex - 1].price.raw),
                        ]"
                      >
                        {{ item.childrens[packageIndex - 1].name }} -
                        {{
                          $format(item.childrens[packageIndex - 1].price.raw)
                        }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div class="d-flex mt-3">
                  <div class="form-group mr-2">
                    <label for="" class="label">Tanggal Keberangkatan</label>
                    <input
                      role="button"
                      v-model="input.pickup_date"
                      :date="input.pickup_date"
                      type="date"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="submit"
                    value="Pesan Sekarang"
                    class="btn btn-secondary py-3 px-4"
                  />
                </div>
              </form>
            </div>
            <div class="col-md-8 d-flex align-items-center">
              <div class="services-wrap rounded-right w-100">
                <h3 class="heading-section mb-4">
                  Pilihan Terbaik Bagi Perjalanan Anda
                </h3>
                <div class="row d-flex mb-4">
                  <div class="col-md-4 d-flex align-self-stretch">
                    <div class="services w-100 text-center">
                      <div
                        class="icon d-flex align-items-center justify-content-center"
                      >
                        <span class="flaticon-route"></span>
                      </div>
                      <div class="text w-100">
                        <h3 class="heading mb-2">
                          Choose Your Pickup Location
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 d-flex align-self-stretch">
                    <div class="services w-100 text-center">
                      <div
                        class="icon d-flex align-items-center justify-content-center"
                      >
                        <span class="flaticon-handshake"></span>
                      </div>
                      <div class="text w-100">
                        <h3 class="heading mb-2">Select the Best Deal</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 d-flex align-self-stretch">
                    <div class="services w-100 text-center">
                      <div
                        class="icon d-flex align-items-center justify-content-center"
                      >
                        <span class="flaticon-transportation"></span>
                      </div>
                      <div class="text w-100">
                        <h3 class="heading mb-2">
                          Reserve Your Destionation Trip
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center mt-5">
                  <div v-if="$device.isDesktop" class="col-lg-4">
                    <a @click="booking" class="btn btn-primary btn-rounded">
                      <i
                        class="icon-bookmark color-white"
                        size="large"
                        aria-hidden="true"
                      ></i>
                      Konsultasi - 24/jam
                    </a>
                  </div>
                  <div v-else class="d-grid gap-2">
                    <a @click="booking" class="btn btn-primary btn-rounded">
                      <i
                        class="icon-bookmark color-white"
                        size="large"
                        aria-hidden="true"
                      ></i>
                      Konsultasi - 24/jam
                    </a>
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
  props: ["categories", "privateDropTrips", "regulerDropTrips"],
  data() {
    return {
      api_url: process.env.NUXT_ENV_API_ENDPOINT,
      points: null,
      goes: [],
      show_destination: false,
      current_date: this.$moment().format("LLL"),
      myValue: "",
      settings: {
        placeholder: "Pilih Keberangkatan",
      },
      packages: null,
      showToPackage: 3,
      input: {
        penjemputan: "",
        destination: "",
        package: [],
        childPackage: [],
        change: null,
        pickup_date: new Date().toISOString().substr(0, 10),
        dropoff_date: this.$moment().format("LL"),
        pickup_time: this.$moment().hours(),
      },
    };
  },
  mounted() {
    AOS.init({
      duration: 800,
      easing: "slide",
    });
    this.activePackage();
    this.getShelterData();
  },

  methods: {
    selectedPickPoints({ id, shelter_id, parent, text }) {
      const data = { id, shelter_id, parent, text };
      this.input.penjemputan = data.text;
      this.loadDistrict(data.shelter_id);
    },

    changePickPoints(e) {
      const id = parseInt(e);
      this.points.map((d) => {
        d.children.map((n) => {
          if (n.id === id) {
            this.input.penjemputan = n.text;
          }
        });
      });
      this.show_destination = true;
    },

    selectedPickDestination({ id, city_id, parent, text }) {
      const data = { id, city_id, parent, text };
      this.myValue = data.text;
      this.input.destination = data.text;
    },

    changePickDestination(e) {
      const id = parseInt(e);
      this.points.map((d) => {
        d.children.map((n) => {
          if (n.id === id) {
            this.input.destination = n.text;
          }
        });
      });
    },

    loadDistrict(shelter_id) {
      // this.goes = this.points.map((d) => d).filter((f) => f.text !== value);
      const endPoint = `${this.api_url}/shelter/change/${shelter_id}`;
      const config = {
        headers: {
          Accept: "application/json",
          "X-Header-DNTour": process.env.NUXT_ENV_APP_SECRET_API,
        },
      };
      this.$axios
        .get(endPoint, config)
        .then(({ data }) => {
          const lists = data.data;
          let childrens = [];
          for (const key in lists) {
            childrens.push({
              text: lists[key].text,
              children: lists[key].districts,
            });
          }
          this.goes = childrens;
        })
        .catch((err) => console.log(err.response));
    },

    getShelterData() {
      const endPoint = `${this.api_url}/shelter`;
      const config = {
        headers: {
          Accept: "application/json",
          "X-Header-DNTour": process.env.NUXT_ENV_APP_SECRET_API,
        },
      };
      this.$axios
        .get(endPoint, config)
        .then(({ data }) => {
          const lists = data.data;
          let childrens = [];
          for (const key in lists) {
            childrens.push({
              text: lists[key].text,
              children: lists[key].districts,
            });
          }
          this.points = childrens;
        })
        .catch((err) => console.log(err.response));
    },

    booking() {
      this.$emit("booking-now");
    },
    changePackage(e) {
      this.input.change = e.target.value.split(",");
    },
    activePackage() {
      let packages = this.categories.map((d) => d);
      let childPackage = packages.map((d) => d?.children)[1];
      // this.input.package = packages.map((d) =>
      //   d.name === "city tour" ? d?.name : ""
      // )[0];
      this.input.childPackage = childPackage.map((d) =>
        d.name !== "city_tour" ? d.name : ""
      );
      let lists = [];
      let packageLists = [];
      packageLists = this.privateDropTrips.concat(this.regulerDropTrips);
      for (const key in packageLists) {
        lists.push({
          text: packageLists[key].categories.map((item) => item.name)[0],
          childrens: packageLists,
        });
      }
      this.packages = lists;
    },

    pickUp() {
      if (Object.keys(this.input).length === 0) {
        alert("harap isi kolom input pemesanan");
      }
      const pickupDate = this.$moment(this.input.pickup_date).format("LL");
      console.log(pickupDate);
      const url = "https://wa.me/6283165539138?text=";
      const contextWa = `Hallo,Admin D&N Tour, saya ingin memesan paket trip ${
        this.input.change[0]
      } D & N Tour, berikut data lengkap saya \n -Berangkat Dari : ${
        this.input.penjemputan !== null
          ? this.input.penjemputan
          : this.location.city
      } , \n -Tujuan Ke : ${this.input.destination}, \n -Paket Trip : ${
        this.input.change[0]
      }-${this.input.change[1]}(${
        this.input.change[2]
      }) \n -Tanggal Berangkat: ${pickupDate}`;

      window.open(`${url}${encodeURIComponent(contextWa)}`);
    },
  },

  computed: {
    cities() {
      return this.$store.getters["pickups/GetCityDrop"];
    },
    picks() {},
  },
};
</script>
