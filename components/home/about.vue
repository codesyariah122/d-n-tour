<template>
  <section class="ftco-section ftco-about" id="about">
    <div class="container">
      <div class="row no-gutters">
        <div
          class="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
          :style="`background-image: url(${about.singleMedia.fields.file.url});`"
        ></div>
        <div
          :style="`${$device.isDesktop ? 'height: 130vh' : ''}`"
          class="col-md-6 wrap-about ftco-animate"
        >
          <div class="heading-section heading-section-white pl-md-5">
            <span class="subheading">{{ about.title }} us</span>
            <h2 class="mb-4">
              Welcome to <br v-if="$device.isMobile" />
              {{ about.captionHead }}
            </h2>
            <div v-html="$md.render(about.contentWeb)"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    about() {
      const contents = this.$store.state.hero.map((d) => d.fields);
      const about = contents.filter((d) => d.title === "About")[0];
      return about;
    },
  },
};
</script>
