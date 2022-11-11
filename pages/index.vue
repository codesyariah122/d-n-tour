<template>
  <main>
    <client-only>
      <home-hero />
      <home-gallery @book-order="bookNow" />
      <home-startups />
    </client-only>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",

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
