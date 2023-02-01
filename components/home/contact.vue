<template>
  <section class="ftco-section contact-section" id="contact">
    <div class="container">
      <div class="row d-flex mb-5 contact-info">
        <div class="col-md-4 col-sm-12">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="border w-100 p-4 rounded mb-2 d-flex">
                <div class="icon mr-3">
                  <span class="icon-map-o"></span>
                </div>
                <p>
                  <span>Address:</span> Jl. Hercules II No.5, Melong, Kec.
                  Cimahi Sel., Kota Cimahi, Jawa Barat 40534
                </p>
              </div>
            </div>
            <div class="col-md-12 col-sm-12">
              <div class="border w-100 p-4 rounded mb-2 d-flex">
                <home-map />
              </div>
            </div>
            <div class="col-md-12 col-sm-12">
              <div class="border w-100 p-4 rounded mb-2 d-flex">
                <div class="icon mr-3">
                  <span class="icon-mobile-phone"></span>
                </div>
                <p>
                  <span>Pesan Via Phone:</span>
                  <a href="tel:+6283165539138">+62 831 6553 9138</a>
                </p>
              </div>
            </div>
            <div class="col-md-12 col-sm-12">
              <div class="border w-100 p-4 rounded mb-2 d-flex">
                <div class="icon mr-3">
                  <span class="icon-envelope-o"></span>
                </div>
                <p>
                  <span>Pesan Via Email:</span>
                  <a href="mailto:dntourtr@dntourtravel.com"
                    >dntourtr@dntourtravel.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="`${
            $device.isDesktop
              ? 'col-md-8 block-9 mb-md-5'
              : 'col-sm-12 block-9 mb-md-5 mt-5'
          }`"
        >
          <div class="row justify-content-center">
            <div class="col-lg-12 col-sm-12">
              <blockquote class="blockquote-footer">
                Kirim pesan kepada admin kami, beri kami masukan untuk
                perkembangan aplikasi web D & N Tour Travel. Kami senang
                menerima masukan membangun untuk perkembangan website kami dan
                fitur-fitur yang bermanfaat bagi perkembangan bisnis kami dan
                perjalanan kalian para travelers.
              </blockquote>
              <img
                v-if="$device.isDesktop"
                src="/D_N-Logo.png"
                width="200"
                alt=""
              />
              <center v-else>
                <img src="/D_N-Logo.png" width="200" alt="" />
              </center>
            </div>
          </div>
          <form @submit.prevent="sendEmail" class="bg-light p-5 contact-form">
            <div class="form-group">
              <input
                @keyup="resetAlert"
                v-model="form.name"
                type="text"
                class="form-control"
                placeholder="Your Name"
              />
              <div
                v-if="validation.name"
                class="alert alert-warning mt-2"
                role="alert"
              >
                {{ validation.name[0] }}
              </div>
            </div>
            <div class="form-group">
              <client-only>
                <vue-tel-input
                  v-model="form.phone"
                  @keyup="resetAlert"
                ></vue-tel-input>
              </client-only>
              <div
                v-if="validation.phone"
                class="alert alert-warning mt-2"
                role="alert"
              >
                {{ validation.phone[0] }}
              </div>
            </div>
            <div class="form-group">
              <input
                @keyup="resetAlert"
                v-model="form.email"
                type="text"
                class="form-control"
                placeholder="Your Email"
              />
              <div
                v-if="validation.email"
                class="alert alert-warning mt-2"
                role="alert"
              >
                {{ validation.email[0] }}
              </div>
            </div>
            <div class="form-group">
              <input
                @keyup="resetAlert"
                v-model="form.subject"
                type="text"
                class="form-control"
                placeholder="Subject"
              />
              <div
                v-if="validation.subject"
                class="alert alert-warning mt-2"
                role="alert"
              >
                {{ validation.subject[0] }}
              </div>
            </div>
            <div class="form-group">
              <blockquote class="blockquote-footer text-muted mt-2">
                Write your message in this textarea bellow!
              </blockquote>
              <client-only>
                <tinymce
                  @keyup="resetAlert"
                  name="message"
                  id="d1"
                  v-model="form.message"
                  :other_options="options"
                ></tinymce>
              </client-only>
              <div
                v-if="validation.message"
                class="alert alert-warning mt-2"
                role="alert"
              >
                {{ validation.message[0] }}
              </div>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary py-3 px-5">
                <div v-if="loadingContact">
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </div>
                <span v-else> Send Message </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        phone: null,
        email: null,
        subject: null,
        message: null,
      },
      loadingContact: null,
      validation: {},
      options: {
        menubar: false,
      },
    };
  },
  mounted() {},

  methods: {
    resetAlert() {
      this.validation = {};
    },
    sendEmail() {
      this.loadingContact = true;
      this.validation = {};
      const endPoint = `${process.env.NUXT_ENV_API_ENDPOINT}/sending-message/${process.env.NUXT_ENV_APP_SECRET_API}`;
      this.$axios
        .post(endPoint, this.form)
        .then(({ data }) => {
          console.log(data)
          if (data.success) {
            setTimeout(() => {
              this.alertSuccess(data.data);
              this.backToNull();
              this.loadingContact = false;
            }, 1500);
          }
        })
        .catch((err) => {
          if (err) {
            this.alertError();
            this.validation = err.response.data;
            setTimeout(() => {
              this.loadingContact = false;
            }, 1500);
          }
        });
    },

    backToNull() {
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.subject = "";
      this.form.message = "";
    },

    alertError() {
      this.$swal({
        icon: "error",
        title: "Oops...",
        text: "Kolom input message belum diisi, Harap isi terlebih dahulu!",
      });
    },
    alertSuccess(data) {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: `Terima kasih, ${data.name} pesan anda akan kami respon segera.`,
        showConfirmButton: false,
        timer: 3500,
      });
    },
  },
};
</script>
