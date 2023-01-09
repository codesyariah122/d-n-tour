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
                  <label for="" class="label">Lokasi Penjemputan</label>
                  <input
                    v-model="location.city"
                    type="text"
                    class="form-control"
                    placeholder="City, Airport, Station, etc"
                  />
                  <small class="text-danger">Wajib diisi *</small>
                </div>
                <div class="form-group">
                  <label for="" class="label">Tujuan Destinasi</label>
                  <input
                    v-model="input.destination"
                    type="text"
                    class="form-control"
                    placeholder="City, Airport, Station, etc"
                  />
                  <small class="text-danger">Wajib diisi *</small>
                </div>
                <div class="form-group mt-3">
                  <label for="paket" class="label">Pilih Paket Trip</label>
                  <select
                    id="paket"
                    class="custom-select"
                    @change="changePackage($event)"
                  >
                    <option value="">Pilih Paket Trip</option>
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
                <!-- <div class="d-flex mt-3">
                  <div class="form-group mr-2">
                    <label for="" class="label">Tanggal Keberangkatan</label>
                    <input
                      v-model="input.pickup_date"
                      type="date"
                      class="form-control"
                      placeholder="Date"
                    />
                  </div>
                  <div class="form-group ml-2">
                    <label for="" class="label">Tanggal Kembali</label>
                    <input
                      v-model="input.dropoff_date"
                      type="date"
                      class="form-control"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="label">Waktu Penjemputan</label>
                  <input
                    v-model="input.pickup_time"
                    type="time"
                    class="form-control"
                    placeholder="Time"
                  />
                </div> -->
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
export default {
  props: ["categories"],
  data() {
    return {
      ip: null,
      location: {
        city: null,
      },
      input: {
        your_city: null,
        destination: null,
        package: [],
        childPackage: [],
        change: null,
        pickup_date: this.$moment().format("LL"),
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
  },

  methods: {
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
      console.log(this.input.your_city);
      const data = this.input;
      console.log(this.input);
      const url = "https://wa.me/6283165539138?text=";
      const contextWa = `Hallo,Admin D&N Tour, saya ingin memesan paket trip D & N Tour, berikut data lengkap saya \n -kota penjemputan : ${
        this.input.your_city !== null
          ? this.input.your_city
          : this.location.city
      } , \n -paket trip : ${this.input.change}, \n -destinasi : ${
        this.input.destination
      }`;

      window.open(`${url}${encodeURIComponent(contextWa)}`);

      console.log(encodeURIComponent(contextWa));
    },
  },
};
</script>
