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
                  <a href="tel://6283165539138">+62 831 6553 9138</a>
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
          <form @submit.prevent="sendEmail" class="bg-light p-5 contact-form">
            <div class="form-group">
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                placeholder="Your Name"
              />
              <small v-if="validasi.name.status" class="text-danger">
                {{ validasi.name.msg }}
              </small>
            </div>
            <div class="form-group">
              <input
                v-model="form.email"
                type="text"
                class="form-control"
                placeholder="Your Email"
              />
              <small v-if="validasi.email.status" class="text-danger">
                {{ validasi.email.msg }}
              </small>
            </div>
            <div class="form-group">
              <input
                v-model="form.subject"
                type="text"
                class="form-control"
                placeholder="Subject"
              />
              <small v-if="validasi.subject.status" class="text-danger">
                {{ validasi.subject.msg }}
              </small>
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
              <small v-if="validasi.message.status" class="text-danger">
                {{ validasi.message.msg }}
              </small>
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
        email: null,
        subject: null,
        message: null,
      },
      validasi: {
        name: {
          status: null,
          msg: null,
        },
        email: {
          status: null,
          msg: null,
        },
        subject: {
          status: null,
          msg: null,
        },
        message: {
          status: null,
          msg: null,
        },
      },
    };
  },
  mounted() {},

  methods: {
    checkEmpty(form) {
      this.validasi.name.status = null;
      this.validasi.name.msg = null;
      this.validasi.email.status = null;
      this.validasi.email.msg = null;
      this.validasi.subject.status = null;
      this.validasi.subject.msg = null;
      this.validasi.message.status = null;
      this.validasi.message.msg = null;
      if (
        form.name === null &&
        form.email === null &&
        form.subject === null &&
        form.message === null
      ) {
        this.validasi.name.status = true;
        this.validasi.name.msg = "Kolom input nama wajib di isi*";
        this.validasi.email.status = true;
        this.validasi.email.msg = "Kolom input email wajib di isi*";
        this.validasi.subject.status = true;
        this.validasi.subject.msg = "Kolom input subject wajib di isi*";
        this.validasi.message.status = true;
        this.validasi.message.msg = "Kolom input message wajib di isi*";
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Harap isi semua kolom input tersedia!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        if (form.name === null) {
          this.validasi.name.status = true;
          this.validasi.name.msg = "Kolom input nama wajib di isi*";
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Kolom input nama wajib di isi!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (form.email === null) {
          this.validasi.email.status = true;
          this.validasi.email.msg = "Kolom input email wajib di isi*";
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Kolom input email wajib di isi!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (form.subject === null) {
          this.validasi.subject.status = true;
          this.validasi.subject.msg = "Kolom input subject wajib di isi*";
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Kolom input subject wajib di isi!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (form.message === null) {
          this.validasi.message.status = true;
          this.validasi.message.msg = "Kolom input message wajib di isi*";
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "Kolom input message wajib di isi!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          return true;
        }
      }
    },
    sendEmail(e) {
      if (this.checkEmpty(this.form)) {
        try {
          emailjs.sendForm(
            process.env.NUXT_ENV_APP_SERVICE_ID_EMAILJS,
            process.env.NUXT_ENV_APP_TEMPLATE_ID_EMAILJS,
            e.target,
            process.env.NUXT_ENV_APP_USER_ID_EMAILJS,
            {
              name: this.form.name,
              email: this.form.email,
              subject: this.form.subject,
              message: this.form.message,
            }
          );
          this.$swal({
            position: "top-end",
            icon: "success",
            title: `Terima kasih ${this.form.name}, pesan anda akan segera di proses team admin kami.`,
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (err) {
          console.log({ err });
        }
        this.form.name = null;
        this.form.email = null;
        this.form.subject = null;
        this.form.message = null;
      }
    },
  },
};
</script>
