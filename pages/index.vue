<style>
.cookie-consent {
  display: flex;
  padding: 10px;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-bottom: 1px solid white;
  color: white;
}
.cookie-consent button {
  border: 1px solid white;
  padding: 10px;
  margin-left: 20px;
  min-width: 140px;
}
</style>
<template>
  <div>
    <home-hero />

    <home-panelheader
      @booking-now="bookNow"
      :categories="categories"
      :privateDropTrips="privateDropTrips"
      :regulerDropTrips="regulerDropTrips"
    />

    <home-newfeatured
      :privateDropTrips="privateDropTrips"
      :regulerDropTrips="regulerDropTrips"
      :cityTours="cityTours"
      :categories="categories"
    />

    <home-about />

    <home-blog />

    <home-services />

    <home-testimoni />

    <home-introhome />

    <home-contact />

    <globals-whatsappbutton />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",

  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: require("~/assets/images/home/parallax.jpg"),
        },
      ],
    };
  },

  async asyncData({ $commerce }) {
    const { data: privateDropTrips } = await $commerce.products.list({
      category_slug: ["private-carter"],
    });
    const { data: regulerDropTrips } = await $commerce.products.list({
      category_slug: ["reguler"],
    });
    const { data: cityTours } = await $commerce.products.list({
      category_slug: ["city-tour"],
    });
    const { data: categories } = await $commerce.categories.list();
    // console.log(categories);
    return {
      privateDropTrips,
      regulerDropTrips,
      categories,
      cityTours,
    };
  },

  mounted() {
    this.checkBook();
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
  },
};
</script>
