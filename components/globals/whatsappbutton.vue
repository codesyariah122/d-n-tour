<template>
  <div>
    <a href="#" @click="sendingWhatsappMessage('6283165539138')" class="float">
      <i class="fa fa-whatsapp my-float"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      send: {
        whatsapp: "",
      },
    };
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
        },
      ],
    };
  },

  methods: {
    sendingWhatsappMessage(num) {
      const url = `https://wa.me/${num}?text=`;
      const contextWa =
        "Hello,D & N Tour saya ingin memesan paket perjalanan dari D & N Tour, bisa infokan saya harga terbaik dari D & N Tour.";
      window.open(`${url}${encodeURIComponent(contextWa)}`);
    },
  },
};
</script>

<style lang="css" scoped>
@media screen and (max-width: 745px) {
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 25px;
    right: 20px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
  }

  .my-float {
    margin-top: 16px;
  }
}
@media (min-width: 992px) {
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
  }

  .my-float {
    margin-top: 16px;
  }
}
</style>
