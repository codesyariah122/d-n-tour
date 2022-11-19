<style lang="css" scoped>
#scrollUp,
#back-top {
  background: #071112;
  height: 50px;
  width: 50px;
  right: 30px;
  bottom: 5%;
  position: fixed;
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
  line-height: 48px;
  border: 2px solid transparent;
  box-shadow: 0 0 10px 3px rgba(108, 98, 98, 0.2);
}

@media (max-width: 575px) {
  #scrollUp,
  #back-top {
    right: 16px;
    bottom: 35%;
    right: 35px;
  }
}

#scrollUp a i,
#back-top a i {
  display: block;
  line-height: 50px;
}

#scrollUp:hover {
  color: #fff;
}

.all-btn {
  color: #071112;
  text-decoration: underline;
  font-size: 16px;
}
</style>
<template>
  <div v-if="scrolling" id="back-top">
    <a title="Go to Top" href="#">
      <i class="icon-arrow-up text-white" aria-hidden="true"></i
    ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: null,
    };
  },
  mounted() {
    this.hideShowScroll();
    this.scrollTop();
  },
  methods: {
    hideShowScroll() {
      document.addEventListener("scroll", (e) => {
        const scroll = window.scrollY;
        this.scrolling = scroll > 100 ? true : false;
      });
    },
    scrollTop() {
      $("#back-top a").on("click", function () {
        $("#home").animate(
          {
            scrollTop: 0,
          },
          800
        );
        return false;
      });
    },
  },
};
</script>
