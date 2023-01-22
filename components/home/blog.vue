<template>
  <section class="ftco-section" id="blog">
    <div class="container">
      <div class="row justify-content-center mb-2">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <span class="subheading">Blog</span>
          <h2>Recent Blog</h2>
        </div>
      </div>

      <div class="row d-flex">
        <div
          v-for="postIndex in postToShow"
          :key="posts[postIndex - 1]?.id"
          :class="`${
            $device.isDesktop ? 'col-md-4 d-flex' : 'col-md-4 d-flex mb-3'
          }`"
        >
          <div class="blog-entry justify-content-end">
            <a
              :href="posts[postIndex - 1]?.fields?.cover?.fields?.file.url"
              class="block-20"
              :style="`background-image: url(https:${
                posts[postIndex - 1]?.fields?.cover?.fields?.file?.url
              })`"
            >
            </a>
            <div class="text pt-4">
              <div class="meta mb-3">
                <div>
                  <a href="#">{{
                    $moment(posts[postIndex - 1]?.fields?.createdAt).format(
                      "LL"
                    )
                  }}</a>
                </div>
                <div>
                  <a href="#">
                    {{ posts[postIndex - 1]?.fields?.authorName?.fields?.name }}
                  </a>
                </div>
              </div>
              <h3 class="heading mt-2">
                <a :href="`/news/${posts[postIndex - 1]?.fields?.slug}`">{{
                  posts[postIndex - 1]?.fields?.title
                }}</a>
              </h3>
              <!-- <p v-if="$device.isDesktop">
                <a
                  :href="`/news/${posts[postIndex - 1].fields.slug}`"
                  class="btn btn-primary"
                  >Read more</a
                >
              </p> -->
              <div class="d-grid gap-2">
                <a
                  :href="`/news/${posts[postIndex - 1].fields.slug}`"
                  class="btn btn-primary btn-sm rounded-md"
                  >Read more</a
                >
              </div>
            </div>
          </div>
        </div>
        <div v-if="loadingPost" class="row justify-content-center">
          <div class="col-lg-6 col-sm-12">
            <h4 class="text-lead text-bold">Wait loading ...</h4>
            <img
              :src="require('~/assets/vector/loading-car.gif')"
              class="img-fluid rounded-circle"
              :width="`${$device.isMobile ? '250' : '150'}`"
            />
          </div>
        </div>
      </div>
      <div v-if="$device.isDesktop" class="row justify-content-center">
        <div v-if="postToShow < 6" class="col-lg-1 col-sm-12">
          <button
            @click="ShowPost"
            class="btn btn-primary rounded-pill btn-lg"
            type="button"
          >
            <div v-if="loadingPost">
              <span
                class="spinner-border spinner-border-md"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </div>
            <span v-else> Load More ... </span>
          </button>
        </div>
      </div>
      <div v-else class="row justify-content-center">
        <div v-if="postToShow < 6" class="d-grid gap-2">
          <button
            @click="ShowPost"
            class="btn btn-primary rounded-pill btn-lg"
            type="button"
          >
            <div v-if="loadingPost">
              <span
                class="spinner-border spinner-border-md"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </div>
            <span v-else> Load More ... </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      postToShow: 3,
      loadingFirst: null,
      loadingPost: null,
    };
  },
  mounted() {
    // console.log(this.posts);
  },
  methods: {
    ShowPost() {
      this.loadingPost = true;
      setTimeout(() => {
        this.loadingPost = false;
        this.postToShow += 3;
      }, 1500);
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
