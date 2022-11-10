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
  data() {
    return {
      ucapan: "",
    };
  },
  mounted() {
    // document.body.setAttribute("style", "overflow: hidden");
    let root = document.getElementsByTagName("html")[0];
    root.setAttribute(
      "class",
      "js sizes customelements history pointerevents postmessage webgl websockets cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth no-csscolumns-breakbefore no-csscolumns-breakafter no-csscolumns-breakinside flexbox picture srcset webworkers"
    );
    this.timeCheck();
    this.activeScroll();
    this.mobileMenu();
    this.WidgetChat();
  },

  methods: {
    mobileMenu() {
      let menu = $("ul#navigation");
      if (menu.length) {
        menu.slicknav({
          prependTo: ".mobile_menu",
          closedSymbol: "+",
          openedSymbol: "-",
        });
      }
    },
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
    WidgetChat() {
      let url =
        "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?82740";
      let s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = url;
      let cta_text = this.$device.isDesktop ? "Admin D & N City Tour" : "";
      let options = {
        enabled: true,
        chatButtonSetting: {
          backgroundColor: "#25D366",
          ctaText: "",
          borderRadius: "25",
          marginLeft: "20",
          marginBottom: "20",
          marginRight: "50",
          position: "left",
        },
        brandSetting: {
          brandName: "D & N Tour Travel",
          brandSubTitle: "City Tour And Drop Bandara Soetta",
          brandImg: require("~/assets/img/logo/d&n.jpg"),
          welcomeText: `Halo, ${this.ucapan} Kak, Ada yang bisa kami bantu.`,
          messageText:
            "Hai, D & N Tour Travel saya ingin pesan layanan city tour dan antar jemput Bandung - Jakarta (Bandara Soetta), bisa bantu saya memilih harga terbaik dari D & N Tour.  {{page_link}}",
          backgroundColor: "#25D366",
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
    timeCheck() {
      let h = this.$moment().hour(),
        m = this.$moment().minute(),
        s = this.$moment().second();
      if (h >= 4 && h < 10) this.ucapan = "Selamat pagi ...";
      if (h >= 10 && h < 15) this.ucapan = "Selamat siang";
      if (h >= 15 && h < 18) this.ucapan = "Selamat sore";
      if (h >= 18 || h < 4) this.ucapan = "Selamat malam";
    },
  },
};
</script>
