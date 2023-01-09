<template>
  <div>
    <!-- <home-hero /> -->
    <package-detail :product="product" />
  </div>
</template>

<script>
export default {
  name: "detail-permalink",
  layout: "default",

  async asyncData({ $commerce, route, params }) {
    const { permalink } = params;
    const product = await $commerce.products.retrieve(permalink, {
      type: "permalink",
    });

    console.log(product);

    return {
      product,
    };
  },
};
</script>
