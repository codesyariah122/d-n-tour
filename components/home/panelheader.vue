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
                  <select
                    id="paket"
                    class="custom-select"
                    @change="changePickPoints($event)"
                  >
                    <option selected disabled>Pilih Keberangkatan</option>
                    <optgroup
                      v-for="(item, idx) in points"
                      :key="idx"
                      :label="item.parent_name"
                    >
                      <option
                        v-for="(district, idx) in item.districts"
                        :key="idx"
                        :value="[item.id, district.name]"
                      >
                        {{ district.name }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div class="form-group">
                  <label for="paket" class="label">Tujuan Ke</label>
                  <select
                    id="paket"
                    class="custom-select"
                    @change="changePickDestination($event)"
                  >
                    <option selected disabled>Pilih Destinasi</option>
                    <optgroup
                      v-for="(item, idx) in goes"
                      :key="idx"
                      :label="item.parent_name"
                    >
                      <option
                        v-for="(district, idx) in item.districts"
                        :key="idx"
                        :value="[item.id, district.name]"
                      >
                        {{ district.name }}
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div class="form-group mt-3">
                  <label for="paket" class="label">Pilih Paket Trip</label>
                  <select
                    id="paket"
                    class="custom-select"
                    @change="changePackage($event)"
                  >
                    <option value="" disabled selected>Pilih Paket Trip</option>
                    <option :value="input.package">
                      {{ input.package }}
                    </option>

                    <option
                      v-for="(item, idx) in input.childPackage"
                      :key="idx"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="d-flex mt-3">
                  <div class="form-group mr-2">
                    <label for="" class="label">Tanggal Keberangkatan</label>
                    <input
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
                  <a @click="booking" class="btn btn-primary btn-rounded">
                    <i
                      class="icon-bookmark color-white"
                      size="large"
                      aria-hidden="true"
                    ></i>
                    Booking Sekarang
                  </a>
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
import { pickpoints } from "~/data/pickups";

export default {
  props: ["categories"],
  data() {
    return {
      ip: null,
      location: {
        city: null,
      },
      points: [],
      goes: [],
      show_destination: false,
      current_date: this.$moment().format("LLL"),
      input: {
        penjemputan: null,
        destination: null,
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
    this.userIpDetected();
    this.dropPickupPoints();
  },

  methods: {
    dropPickupPoints() {
      this.points = pickpoints;
    },

    changePickPoints(e) {
      const split = e.target.value.split(",");
      const parent_city = parseInt(split[0]);
      this.input.penjemputan = split[1];
      this.show_destination = true;
      if (parent_city % 2 === 1) {
        this.loadDistrict(2);
      } else {
        this.loadDistrict(1);
      }
    },

    changePickDestination(e) {
      const split = e.target.value.split(",");
      const parent_city = parseInt(split[0]);
      this.input.destination = split[1];
      this.loadDistrict(parent_city);
    },

    loadDistrict(id) {
      this.goes = pickpoints.map((data) => data).filter((val) => val.id === id);
    },

    userIpDetected() {
      const publicUrl = process.env.NUXT_ENV_APP_IP_DETECT_URL;
      const url = `${publicUrl}`;
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.ip = data?.data;
          this.userLocationDetected(data?.ip);
        })
        .catch((err) => console.log(err));
    },
    userLocationDetected(ip) {
      const secret = process.env.NUXT_ENV_APP_SECRET_API;
      const publicUrl = process.env.NUXT_ENV_APP_API_URL;
      const url = `${publicUrl}/${secret}/${ip}`;
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.location = data?.data;
          this.location.city = `${data?.data?.city} - ${data?.data?.district}`;
        })
        .catch((err) => console.log(err));
    },
    booking() {
      this.$emit("booking-now");
    },
    changePackage(e) {
      this.input.change = e.target.value;
    },
    activePackage() {
      let packages = this.categories.map((d) => d);
      let childPackage = packages.map((d) => d?.children)[1];
      this.input.package = packages.map((d) =>
        d.name === "city tour" ? d?.name : ""
      )[0];
      this.input.childPackage = childPackage.map((d) => d.name);
    },
    pickUp() {
      if (Object.keys(this.input).length === 0) {
        alert("harap isi kolom input pemesanan");
      }
      const url = "https://wa.me/6283165539138?text=";
      const contextWa = `Hallo,Admin D&N Tour, saya ingin memesan paket trip D & N Tour, berikut data lengkap saya \n -Berangkat Dari : ${
        this.input.penjemputan !== null
          ? this.input.penjemputan
          : this.location.city
      } , \n -Paket Trip : ${this.input.change}, \n -Tujuan Ke : ${
        this.input.destination
      } \n -Tanggal Berangkat: ${this.pickup_date}`;

      window.open(`${url}${encodeURIComponent(contextWa)}`);

      console.log(encodeURIComponent(contextWa));
    },
  },

  computed: {
    cities() {
      return this.$store.getters["pickups/GetCityDrop"];
    },
  },
};
</script>
