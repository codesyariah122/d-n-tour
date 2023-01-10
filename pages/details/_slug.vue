<template>
  <div>
    <package-detail :product="product" />
  </div>
</template>

<script>
export default {
  name: "details-slug",
  layout: "package",

  head() {
    return {
      title: `D & N | Detail Package |${this.product?.categories[0]?.name} - ${this.product?.name}`,
    };
  },

  async asyncData({ $commerce, route, params }) {
    const { slug } = params;
    const products = await $commerce.products.list();
    const product = products?.data
      .map((val) => val)
      .filter((e) => e?.permalink === slug)[0];

    return {
      product,
    };
  },
};
</script>
