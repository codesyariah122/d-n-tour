<template>
  <div>
    <h1>Detail package</h1>
    <pre>
      {{ $route.params.permalink }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "detail-permalink",
  layout: "default",
};
</script>
