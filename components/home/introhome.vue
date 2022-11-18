<style lang="scss" scoped>
@import "~/assets/scss/parallax.scss";
</style>
<template>
  <div
    class="parallax overlay mt-5"
    :style="`background-image: url(${parallax.data.bg});`"
  ></div>
</template>

<script>
import ParallaxImage from "~/assets/images/home/parallax.jpg";
import ParallaxMobile from "~/assets/images/home/parallax-mobile.jpg";

export default {
  data() {
    return {
      parallax: {
        data: {
          bg: this.$device.isDesktop ? ParallaxImage : ParallaxMobile,
        },
      },
    };
  },
};
</script>
