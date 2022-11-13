<template>
  <div>
    <home-hero />
    <home-panelheader @booking-now="bookNow" />
    <home-about />
    <home-services />
    <home-featured
      :dropTrips="dropTrips"
      :cityTours="cityTours"
      :categories="categories"
    />
    <home-introhome />
    <home-blog />
    <home-contact />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",

  async asyncData({ $commerce }) {
    const { data: dropTrips } = await $commerce.products.list({
      category_slug: ["drop-trip"],
    });
    const { data: cityTours } = await $commerce.products.list({
      category_slug: ["city-tour"],
    });
    const { data: categories } = await $commerce.categories.list();

    return {
      dropTrips,
      categories,
      cityTours,
    };
  },

  mounted() {
    this.checkBook();
    this.whatsappButton();
  },

  methods: {
    checkBook() {
      const check = localStorage.getItem("book-now")
        ? JSON.parse(localStorage.getItem("book-now"))
        : null;
      if (check) {
        if (check.active) {
          $crisp.push(["do", "chat:show"]);
        } else {
          $crisp.push(["do", "chat:hide"]);
        }
      } else {
        $crisp.push(["do", "chat:hide"]);
      }
    },
    bookNow() {
      $crisp.push(["do", "chat:show"]);
      $crisp.push(["do", "chat:open"]);
      const book = {
        date: this.$moment().format("LLLL"),
        active: true,
        device: window.navigator.userAgent,
      };
      localStorage.setItem("book-now", JSON.stringify(book));
    },
    whatsappButton() {
      let url =
        "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?56694";
      let s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = url;
      let options = {
        enabled: true,
        chatButtonSetting: {
          backgroundColor: "#01d28e",
          ctaText: "Talk With Us",
          borderRadius: "25",
          marginLeft: "0",
          marginBottom: "50",
          marginRight: "50",
          position: "left",
        },
        brandSetting: {
          brandName: "D & N Tour Travel",
          brandSubTitle:
            "Drop trip Bandung - Jakarta (Bandara Soetta), tour trip destinasi wisata kota Bandung",
          brandImg:
            "https://cdn.chec.io/merchants/48448/assets/Hpxov95uMpsnws7A%7C251502925_702961521138930_5381377419890411286_n.jpg",
          welcomeText:
            "Hi kak ! Jalan jalan yuk.\n Ada paket trip menarik dari kami, mau tau lebih banyak... yuk cari tau disini.",
          messageText:
            "Hello,D & N Tour saya ingin memesan paket perjalanan dari D & N Tour, bisa infokan saya harga terbaik dari D & N Tour. {{page_link}}",
          backgroundColor: "#01d28e",
          ctaText: "Start Chat",
          borderRadius: "25",
          autoShow: false,
          phoneNumber: "6283165539138",
        },
      };
      s.onload = function () {
        CreateWhatsappChatWidget(options);
      };
      let x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    },
  },
};
</script>
