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
                  <label for="nama" class="label">Nama Lengkap</label>
                  <input
                    type="text"
                    id="nama"
                    v-model="input.fullname"
                    placeholder="Nama Lengkap"
                    class="custom-input"
                  />
                </div>
                <div class="form-group">
                  <client-only>
                    <vue-tel-input v-model="input.phone"></vue-tel-input>
                  </client-only>
                </div>
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
                  <label for="paket" class="label">Pilih Paket Trip</label>
                  <select
                    id="paket"
                    class="custom-select text-capitalize"
                    @change="changePackage($event)"
                  >
                    <option disabled selected>Pilih Paket Trip</option>

                    <optgroup
                      v-for="(item, idx) in products"
                      :key="idx"
                      :label="item.title"
                    >
                      <option
                        v-for="(product, index) in item.products"
                        :key="index"
                        :value="[
                          item.title,
                          product.title,
                          $format(product.price),
                        ]"
                      >
                        {{ product.title }} -
                        {{ $format(product.price) }}
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
  props: ["categories", "products"],
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
      input: {
        fullname: "",
        phone: "",
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
      if (e) {
        const id = parseInt(e);
        this.points.map((d) => {
          d.children.map((n) => {
            if (n.id === id) {
              this.input.destination = n.text;
            }
          });
        });
      }
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
      if (e.target.value) {
        this.input.change = e.target.value.split(",");
      }
    },

    pickUp() {
      if (this.input.change === null) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Anda belum memilih Paket Trip !",
        });
      } else {
        if (this.input.fullname === "" || this.input.fullname === undefined) {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Harap lengkapi data Kamu ...",
          });
        } else {
          if (this.input.penjemputan !== "" && this.input.destination !== "") {
            if (Object.keys(this.input).length === 0) {
              alert("harap isi kolom input pemesanan");
            }
            const pickupDate = this.$moment(this.input.pickup_date).format(
              "LL"
            );
            const url = "https://wa.me/6283165539138?text=";
            const contextWa = `Hallo,Admin D&N Tour, saya ingin memesan paket trip ${
              this.input.change[0]
            } D & N Tour, berikut data lengkap saya \n -Nama Lengkap : ${
              this.input.fullname
            }, \n -No Telephone: ${this.input.phone}, \n -Berangkat Dari : ${
              this.input.penjemputan !== null
                ? this.input.penjemputan
                : this.location.city
            } , \n -Tujuan Ke : ${this.input.destination}, \n -Paket Trip : ${
              this.input.change[0]
            }-${this.input.change[1]}(${
              this.input.change[2]
            }) \n -Tanggal Berangkat: ${pickupDate}`;

            window.open(`${url}${encodeURIComponent(contextWa)}`);
          } else {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Harap pilih Lokasi Penjemputan - Destination ...",
            });
          }
        }
      }
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
