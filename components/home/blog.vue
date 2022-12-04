<template>
  <section class="ftco-section" id="blog">
    <!-- <div class="container">
      <div class="row">
        <div v-for="post in posts" :key="post.id" class="col-md-4">
          <pre>
            {{ post }}
          </pre>
        </div>
      </div>
    </div> -->
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-7 heading-section text-center ftco-animate">
          <span class="subheading">Blog</span>
          <h2>Recent Blog</h2>
        </div>
      </div>
      <div class="row d-flex">
        <div
          v-for="post in posts"
          :key="post.id"
          class="col-md-4 d-flex ftco-animate"
        >
          >
          <div class="blog-entry justify-content-end">
            <a
              :href="post.fields.cover.fields.file.url"
              class="block-20"
              :style="`background-image: url(https:${post.fields.cover.fields.file.url})`"
            >
            </a>
            <div class="text pt-4">
              <div class="meta mb-3">
                <div>
                  <a href="#">{{
                    $moment(post.fields.createdAt).format("LL")
                  }}</a>
                </div>
                <div>
                  <a href="#">
                    {{ post.fields.authorName.fields.name }}
                  </a>
                </div>
              </div>
              <h3 class="heading mt-2">
                <a :href="`/news/${post.fields.slug}`">{{
                  post.fields.title
                }}</a>
              </h3>
              <p>
                <a :href="`/news/${post.fields.slug}`" class="btn btn-primary"
                  >Read more</a
                >
              </p>
            </div>
          </div>
        </div>

        <div v-if="posts.length <= 1" class="col-md-4 d-flex">
          <div class="blog-entry justify-content-end">
            <a
              href="blog-single.html"
              class="block-20"
              :style="`background-image: url(${require('~/assets/images/default/image_2.jpg')})`"
            >
            </a>
            <div class="text pt-4">
              <div class="meta mb-3">
                <div><a href="#">Oct. 29, 2019</a></div>
                <div><a href="#">Admin</a></div>
                <div>
                  <a href="#" class="meta-chat"
                    ><span class="icon-chat"></span> 3</a
                  >
                </div>
              </div>
              <h3 class="heading mt-2">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
              <p><a href="#" class="btn btn-primary">Read more</a></p>
            </div>
          </div>
        </div>

        <div v-if="posts.length <= 1" class="col-md-4 d-flex">
          <div class="blog-entry">
            <a
              href="blog-single.html"
              class="block-20"
              :style="`background-image: url(${require('~/assets/images/default/image_3.jpg')})`"
            >
            </a>
            <div class="text pt-4">
              <div class="meta mb-3">
                <div><a href="#">Oct. 29, 2019</a></div>
                <div><a href="#">Admin</a></div>
                <div>
                  <a href="#" class="meta-chat"
                    ><span class="icon-chat"></span> 3</a
                  >
                </div>
              </div>
              <h3 class="heading mt-2">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
              </h3>
              <p><a href="#" class="btn btn-primary">Read more</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.posts);
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
