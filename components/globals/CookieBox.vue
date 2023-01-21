<template>
  <div class="container-fluid">
    <VueIfBot>
      <cookie-consent>
        <template slot="message">
          <div class="container">
            <div class="d-flex">
              <div class="col-lg-12 col-sm-12 mt-5 px-2 py-3">
                <h5 v-if="$device.isDesktop" class="text-bold text-white">
                  D & N Tour Travel Website menggunakan cookie untuk memberikan
                  pengalaman browsing yang lebih baik bagi Anda, dengan
                  perlindungan terhadap keamanan kebijakan privacy data-data
                  anda.
                </h5>
                <blockquote v-else class="blockquote-footer text-white">
                  D & N Tour Travel Website menggunakan cookie untuk memberikan
                  pengalaman browsing yang lebih baik bagi Anda, dengan
                  perlindungan terhadap keamanan kebijakan privacy data-data
                  anda.
                </blockquote>
              </div>
            </div>
            <div
              class="row justify-center"
              :style="`${
                $device.isDesktop ? '' : 'width: 25px; margin-left: -30px'
              }`"
            >
              <div class="col-lg-12 col-sm-4 mb-5">
                <a
                  href="https://api.store.dntourtravel.com/privacy-policy"
                  class="btn btn-link fs-5"
                  >D & N Tour Travel - Travel bandung Bandara</a
                >
              </div>
            </div>
          </div>
        </template>
        <template slot="button">
          <div class="d-flex">
            <div class="col-lg-4 col-sm-12">
              <button @click="Accepted" class="btn btn-primary btn-md">
                Setuju
              </button>
            </div>
          </div>
        </template>
      </cookie-consent>
    </VueIfBot>
  </div>
</template>

<script>
import VueIfBot from "vue-if-bot/dist/vue-if-bot.es";
import CookieConsent from "vue-cookieconsent-component/src/components/CookieConsent.vue";
export default {
  components: {
    VueIfBot,
    CookieConsent,
  },
  mounted() {
    // if(document.querySelector('.cookie-consent-compliance')){
    //   document.querySelector('.cookie-consent-compliance').style.visibility="hidden"
    // }
  },
  methods: {
    Accepted() {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Your data has been safe",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>

<style>
.cookie-consent {
  /*display: flex;*/
  padding: 5px;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-bottom: 1px solid white;
  color: white;
  background: linear-gradient(to right, rgb(0, 0, 0), rgb(125, 125, 125));
}
.cookie-consent button {
  border: 2px solid white;
  box-shadow: 5px 10px #888888;
  background: linear-gradient(to left, rgb(10, 10, 10), rgb(23, 13, 9));
}
.cookie-consent button:hover {
  transform: translateY(15px);
}
@media (min-width: 992px) {
  .cookie-consent {
    padding: 0;
    text-align: center;
    margin: 0;
    margin-bottom: -1rem;
  }

  .cookie-consent button {
    margin-top: -3rem;
  }
  .cookie-consent button:hover {
    transform: translateY(5px);
  }
}
</style>
