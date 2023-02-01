<template>
  <div class="inner-page">
    <h2 class="mb-3">
      {{ news.fields.title }}
    </h2>
    <article v-html="$md.render(news.fields.content)"></article>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>

<style lang="scss">
.inner-page {
  article {
    h2 {
      font-weight: 800;
      font-family: "Ubuntu", sans-serif;
    }
    h3 {
      margin-top: 2rem;
      font-weight: 700;
      font-family: "Ubuntu", sans-serif;
    }
    p {
      font-family: "Roboto Mono", monospace;
      line-height: 31px;
      word-spacing: 5px;
      text-align: justify;
    }
    img {
      width: 90%;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
  }
}
@media (max-width: 768px) {
}
@media (max-width: 420px) {
  .inner-page {
    article {
      h2 {
        font-weight: 800;
        font-family: "Ubuntu", sans-serif;
      }
      h3 {
        margin-top: 2rem;
        font-weight: 700;
        font-family: "Ubuntu", sans-serif;
      }
      h4 {
        margin-top: 2rem;
        font-weight: 700;
        font-family: "Ubuntu", sans-serif;
      }
      p {
        font-family: "Roboto Mono", monospace;
        line-height: 31px;
        word-spacing: 5px;
        text-align: justify;
      }
      img {
        max-width: 335px;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
