<template>
  <footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">
              <a href="#" class="logo"
                ><img
                  :src="
                    require('~/assets/images/default/new-brand-logo-white.png')
                  "
                  width="30"
                  style="margin-top: -0.1rem"
                />
                D<span>&</span>N</a
              >
            </h2>
            <p>
              Perjalanan & Transportasi, Melayani pengantaran Bandara Soekarno
              Hatta, Jabodetabek dan wilayah lainnya. Paket city tour trip
              destinasi wisata Bandung.
            </p>
            <ul
              class="ftco-footer-social list-unstyled float-md-left float-lft mt-5"
            >
              <li class="ftco-animate">
                <a href="https://sites.google.com/view/dntourtravel?pli=1"
                  ><span class="icon-twitter"></span
                ></a>
              </li>
              <li class="ftco-animate">
                <a href="https://sites.google.com/view/dntourtravel?pli=1"
                  ><span class="icon-facebook"></span
                ></a>
              </li>
              <li class="ftco-animate">
                <a href="https://www.instagram.com/dntour01/"
                  ><span class="icon-instagram"></span
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4 ml-md-5">
            <h2 class="ftco-heading-2">Information</h2>
            <ul class="list-unstyled">
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel/sejarah"
                  class="py-2 d-block"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel"
                  class="py-2 d-block"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel"
                  class="py-2 d-block"
                  >Term and Conditions</a
                >
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel"
                  class="py-2 d-block"
                  >Best Price Guarantee</a
                >
              </li>
              <li>
                <a
                  href="https://api.store.dntourtravel.com/privacy-policy"
                  class="py-2 d-block"
                  >Privacy &amp; Cookies Policy</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Customer Support</h2>
            <ul class="list-unstyled">
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel/faq"
                  class="py-2 d-block"
                  >FAQ</a
                >
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel"
                  class="py-2 d-block"
                  >Payment Option</a
                >
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel"
                  class="py-2 d-block"
                  >Booking Tips</a
                >
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel"
                  class="py-2 d-block"
                  >How it works</a
                >
              </li>
              <li>
                <a
                  href="https://sites.google.com/view/dntourtravel"
                  class="py-2 d-block"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Have a Questions?</h2>
            <div class="block-23 mb-3">
              <ul>
                <li>
                  <span class="icon icon-map-marker"></span
                  ><span class="text"
                    >Jl. Hercules II No.5, Melong, Kec. Cimahi Sel., Kota
                    Cimahi, Jawa Barat 40534</span
                  >
                </li>
                <li>
                  <a href="tel:+6283165539138"
                    ><span class="icon icon-phone"></span
                    ><span class="text">+62 831 6553 9138</span></a
                  >
                </li>
                <li>
                  <a href="mailto:dntourtr@dntourtravel.com"
                    ><span class="icon icon-envelope"></span
                    ><span class="text"
                      >&nbsp;&nbsp;dntourtr@dntourtravel.com</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; {{ $moment().year() }}
            All rights reserved | This template is made with
            <i class="icon-heart color-danger" aria-hidden="true"></i> by
            <a href="https://api.store.dntourtravel.com/" target="_blank"
              >D & N</a
            >
            Team
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      ca_pub: process.env.NUXT_ENV_GOOGLE_ADS_CA,
      g_tag: process.env.NUXT_ENV_G_TAG_MANAGER,
    };
  },
};
</script>
