<template>
  <section
    class="ftco-section testimony-section bg-light mb-5"
    id="testimoni"
    :style="`${$device.isDesktop ? 'margin-top: -5rem;' : ''}`"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <h2>Lihat <b>Kata Mereka</b> Tentang D & N Tour Travel</h2>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Carousel indicators -->
            <ol class="carousel-indicators">
              <li
                v-for="(item, idx) in testimonials"
                :key="item.id"
                data-target="#myCarousel"
                :data-slide-to="idx"
                :class="`${idx === 0 ? 'active' : ''}`"
              ></li>
            </ol>
            <!-- Wrapper for carousel items -->
            <div class="carousel-inner">
              <div
                v-for="(item, idx) in testimonials"
                :key="idx"
                :class="`carousel-item ${idx === 0 ? 'active' : ''}`"
              >
                <div class="row justify-content-center">
                  <div class="col-sm-12 col-lg-8">
                    <div class="testimonial-wrapper">
                      <div
                        class="testimonial"
                        v-html="item.fields.testimoni"
                      ></div>
                      <div class="media">
                        <img
                          :src="item.fields.photo.fields.file.url"
                          class="mr-3"
                          alt=""
                        />
                        <div class="media-body">
                          <div class="overview">
                            <div class="name">
                              <b>{{ item.fields.costumerName }}</b>
                            </div>
                            <div class="details">{{ item.fields.profesi }}</div>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star-half-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="testimonial-wrapper">
                      <div class="testimonial">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eu sem tempor, varius quam at, luctus dui. Mauris
                        magna metus, dapibus nec turpis vel, semper malesuada
                        ante, commodo iacul viverra.
                      </div>
                      <div class="media">
                        <img
                          src="/examples/images/clients/3.jpg"
                          class="mr-3"
                          alt=""
                        />
                        <div class="media-body">
                          <div class="overview">
                            <div class="name"><b>Michael Holz</b></div>
                            <div class="details">Web Developer / DevCorp</div>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="testimonial-wrapper">
                      <div class="testimonial">
                        Vestibulum quis quam ut magna consequat faucibus.
                        Pellentesque eget mi suscipit tincidunt. Utmtc tempus
                        dictum. Pellentesque virra. Quis quam ut magna consequat
                        faucibus, metus id mi gravida.
                      </div>
                      <div class="media">
                        <img
                          src="/examples/images/clients/4.jpg"
                          class="mr-3"
                          alt=""
                        />
                        <div class="media-body">
                          <div class="overview">
                            <div class="name"><b>Mary Saveley</b></div>
                            <div class="details">
                              Graphic Designer / MarsMedia
                            </div>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
  computed: {
    testimonials() {
      return this.$store.state.testimoni;
    },
  },
};
</script>

<style lang="css" scoped>
h2 {
  color: #000;
  font-size: 26px;
  font-weight: 300;
  text-align: center;
  position: relative;
  margin: 30px 0 60px;
}
h2::after {
  content: "";
  width: 100px;
  position: absolute;
  margin: 0 auto;
  height: 4px;
  border-radius: 1px;
  background: #1abc9c;
  left: 0;
  right: 0;
  bottom: -20px;
}
.carousel .carousel-item {
  color: #999;
  min-height: 120px;
  font-size: 13px;
}
.carousel .media {
  position: relative;
  padding: 0 0 0 20px;
}
.carousel .media img {
  width: 75px;
  height: 75px;
  display: block;
  border-radius: 50%;
}
.carousel .testimonial-wrapper {
  padding: 0 10px;
}
.carousel .testimonial {
  color: #808080;
  position: relative;
  padding: 15px;
  background: #f1f1f1;
  border: 1px solid #efefef;
  border-radius: 3px;
  margin-bottom: 15px;
}
.carousel .testimonial::after {
  content: "";
  width: 15px;
  height: 15px;
  display: block;
  background: #f1f1f1;
  border: 1px solid #efefef;
  border-width: 0 0 1px 1px;
  position: absolute;
  bottom: -8px;
  left: 46px;
  transform: rotateZ(-46deg);
}
.carousel .star-rating li {
  padding: 0 2px;
}
.carousel .star-rating i {
  font-size: 16px;
  color: #ffdc12;
}
.carousel .overview {
  padding: 3px 0 0 15px;
}
.carousel .overview .details {
  padding: 5px 0 8px;
}
.carousel .overview b {
  text-transform: uppercase;
  color: #1abc9c;
}
.carousel .carousel-indicators {
  bottom: -70px;
}
.carousel-indicators li,
.carousel-indicators li.active {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 1px 2px;
  box-sizing: border-box;
}
.carousel-indicators li {
  background: #e2e2e2;
  border: 4px solid #fff;
}
.carousel-indicators li.active {
  color: #fff;
  background: #1abc9c;
  border: 5px double;
}
</style>
