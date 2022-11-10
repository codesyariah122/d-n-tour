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
  head() {
    return {
      script: [
        {
          src: "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js",
        },
      ],
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
      let wa_btnSetting = {
        btnColor: "#16BE45",
        ctaText: "Talk To Us",
        cornerRadius: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: "left",
        whatsAppNumber: "6283165539138",
        welcomeMessage:
          "Hai, D & N Tour Travel saya ingin pesan layanan city tour dan antar jemput Bandung - Jakarta (Bandara Soetta), bisa bantu saya memilih harga terbaik dari D & N Tour.",
        zIndex: 999999,
        btnColorScheme: "light",
      };
      window.onload = () => {
        _waEmbed(wa_btnSetting);
      };
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
