<template>
  <div>
    <globals-loader />
    <layout-header />
    <Nuxt />
    <layout-footer />
    <globals-backtop />
  </div>
</template>
<script>
export default {
  mounted() {
    // document.body.setAttribute("style", "overflow: hidden");
    let root = document.getElementsByTagName("html")[0];
    root.setAttribute(
      "class",
      "js sizes customelements history pointerevents postmessage webgl websockets cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth no-csscolumns-breakbefore no-csscolumns-breakafter no-csscolumns-breakinside flexbox picture srcset webworkers"
    );
    this.activeScroll();
  },

  methods: {
    activeScroll() {
      $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
          $(".header-sticky").removeClass("sticky-bar");
          $("#back-top").fadeOut(500);
        } else {
          $(".header-sticky").addClass("sticky-bar");
          $("#back-top").fadeIn(500);
        }
      });
    },
  },
};
</script>
