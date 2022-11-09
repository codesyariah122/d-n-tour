<template>
  <main>
    <client-only>
      <home-hero />
      <home-gallery />
    </client-only>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
};
</script>
