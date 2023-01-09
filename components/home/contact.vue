<template>
  <section class="ftco-section contact-section" id="contact">
    <div class="container">
      <div class="row d-flex mb-5 contact-info">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
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
            <div class="col-md-12">
              <div class="border w-100 p-4 rounded mb-2 d-flex">
                <home-map />
              </div>
            </div>
            <div class="col-md-12">
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
            <div class="col-md-12">
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
        <div class="col-md-8 block-9 mb-md-5">
          <div class="row justify-center">
            <div class="col-lg-12 col-sm-12">
              <blockquote class="blockquote-footer">
                Kirim pesan kepada admin kami, beri kami masukan untuk
                perkembangan web application D & N Tour Travel. Kami senang
                menerima masukan membangun untuk perkembangan website kami dari
                kalian para travelers.
              </blockquote>
              <img src="/D_N-Logo.png" width="200" alt="" />
            </div>
          </div>
          <form @submit.prevent="sendEmail" class="bg-light p-5 contact-form">
            <div class="form-group">
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                placeholder="Your Name"
              />
            </div>
            <div class="form-group">
              <client-only>
                <vue-tel-input v-model="form.phone"></vue-tel-input>
              </client-only>
            </div>
            <div class="form-group">
              <input
                v-model="form.email"
                type="text"
                class="form-control"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <input
                v-model="form.subject"
                type="text"
                class="form-control"
                placeholder="Subject"
              />
            </div>
            <div class="form-group">
              <textarea
                v-model="form.message"
                name=""
                id=""
                cols="30"
                rows="7"
                class="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Send Message"
                class="btn btn-primary py-3 px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

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
    };
  },
  mounted() {},

  methods: {
    sendEmail() {
      const isNull = Object.values(this.form).every((val) => {
        console.log(val);
        if (val === null || val === "") {
          return true;
        }
      });
      if (isNull) this.alertError();

      this.nextSendingMessage();
    },

    nextSendingMessage() {
      const endPoint = `${process.env.NUXT_ENV_API_ENDPOINT}/sending-message/${process.env.NUXT_ENV_APP_SECRET_API}`;
      this.$axios
        .post(endPoint, this.form)
        .then(({ data }) => {
          if (data.success) {
            this.alertSuccess(data.data);
            this.backToNull();
          }
        })
        .catch((err) => console.log(err.message));
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
