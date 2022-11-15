<template>
  <section class="ftco-section ftco-no-pt bg-light">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-12 featured-top">
          <div class="row no-gutters">
            <div class="col-md-4 d-flex align-items-center">
              <form
                @submit.prevent="pickUp"
                class="request-form ftco-animate bg-primary"
              >
                <h2>Make your trip</h2>
                <div class="form-group">
                  <label for="" class="label">Pick-up location</label>
                  <input
                    required
                    v-model="input.your_city"
                    type="text"
                    class="form-control"
                    placeholder="City, Airport, Station, etc"
                  />
                </div>
                <div class="form-group">
                  <label for="" class="label">Drop-off location</label>
                  <input
                    required
                    v-model="input.destination"
                    type="text"
                    class="form-control"
                    placeholder="City, Airport, Station, etc"
                  />
                </div>
                <div class="form-group">
                  <label for="paket" class="label">Pilih Paket Trip</label>
                  <select
                    id="paket"
                    class="custom-select"
                    required
                    @change="changePackage($event)"
                  >
                    <option value="">Pilih Paket Trip</option>
                    <option
                      v-for="(item, idx) in input.package"
                      :value="item"
                      :key="idx"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="d-flex">
                  <div class="form-group mr-2">
                    <label for="" class="label">Pick-up date</label>
                    <input
                      required
                      v-model="input.pickup_date"
                      type="date"
                      class="form-control"
                      placeholder="Date"
                    />
                  </div>
                  <div class="form-group ml-2">
                    <label for="" class="label">Drop-off date</label>
                    <input
                      required
                      v-model="input.dropoff_date"
                      type="date"
                      class="form-control"
                      placeholder="Date"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="label">Pick-up time</label>
                  <input
                    required
                    v-model="input.pickup_time"
                    type="time"
                    class="form-control"
                    placeholder="Time"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Pilih Tanggal"
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
                  <div class="col-md-4 d-flex align-self-stretch ftco-animate">
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
                  <div class="col-md-4 d-flex align-self-stretch ftco-animate">
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
                  <div class="col-md-4 d-flex align-self-stretch ftco-animate">
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
      input: {
        your_city: null,
        destination: null,
        package: [],
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
  },

  methods: {
    booking() {
      this.$emit("booking-now");
    },
    changePackage(e) {
      console.log(e.target.value);
      this.input.change = e.target.value;
    },
    activePackage() {
      let packages = this.categories.map((d) => d);
      this.input.package = packages.map((d) => d.name);
    },
    pickUp() {
      console.log(Object.keys(this.input).length);
      if (Object.keys(this.input).length === 0) {
        alert("harap isi kolom input pemesanan");
      }
      const data = this.input;
      console.log(this.input);
      const url = "https://wa.me/6283165539138?text=";
      const contextWa = `Hallo,Admin D&N Tour, saya ingin memesan paket trip D & N Tour, berikut data lengkap saya \n -kota penjemputan : ${this.input.your_city} , \n -paket trip : ${this.input.change}, \n -destinasi : ${this.input.destination} ,\n -tanggal penjemputan : ${this.input.pickup_date}, \n -jam : ${this.input.pickup_time}`;

      window.open(`${url}${encodeURIComponent(contextWa)}`);

      console.log(encodeURIComponent(contextWa));
    },
  },
};
</script>
