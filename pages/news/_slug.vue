<template>
  <div>
    <section
      class="hero-wrap hero-wrap-2 js-fullheight"
      :style="`background-image: url('${post.fields.cover.fields.file.url}')`"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay"></div>
      <div class="container">
        <div
          class="row no-gutters slider-text js-fullheight align-items-end justify-content-start"
        >
          <div class="col-md-9 ftco-animate pb-5">
            <p class="breadcrumbs">
              <span class="mr-2"
                ><a href="/"
                  ><i class="ion-ios-arrow-forward"></i> Back To Home
                </a></span
              >
              <!-- <span class="mr-2"
                ><a href="#">Blog <i class="ion-ios-arrow-forward"></i></a
              ></span> -->
              <!-- <span>Blog Single <i class="ion-ios-arrow-forward"></i></span> -->
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-degree-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ftco-animate inner-page">
            <news-article :news="post" />
            <div class="tag-widget post-tag-container mb-5 mt-5">
              <div class="tagcloud">
                <a href="#" class="tag-cloud-link">Life</a>
                <a href="#" class="tag-cloud-link">Sport</a>
                <a href="#" class="tag-cloud-link">Tech</a>
                <a href="#" class="tag-cloud-link">Travel</a>
              </div>
            </div>

            <div class="about-author d-flex p-4 bg-light">
              <div class="bio mr-5">
                <img
                  :src="`${require('~/assets/images/default/person_1.jpg')}`"
                  alt="Image placeholder"
                  class="img-fluid mb-4"
                />
              </div>
              <div class="desc">
                <h3>George Washington</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>

            <div class="pt-5 mt-5">
              <h3 class="mb-5">6 Comments</h3>
              <ul class="comment-list">
                <li class="comment">
                  <div class="vcard bio">
                    <img
                      :src="`${require('~/assets/images/default/person_1.jpg')}`"
                      alt="Image placeholder"
                    />
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta">Oct. 29, 2019 at 1:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>
                </li>

                <li class="comment">
                  <div class="vcard bio">
                    <img
                      :src="`${require('~/assets/images/default/person_1.jpg')}`"
                      alt="Image placeholder"
                    />
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta">Oct. 29, 2019 at 1:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>

                  <ul class="children">
                    <li class="comment">
                      <div class="vcard bio">
                        <img
                          :src="`${require('~/assets/images/default/person_1.jpg')}`"
                          alt="Image placeholder"
                        />
                      </div>
                      <div class="comment-body">
                        <h3>John Doe</h3>
                        <div class="meta">Oct. 29, 2019 at 1:21pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p><a href="#" class="reply">Reply</a></p>
                      </div>

                      <ul class="children">
                        <li class="comment">
                          <div class="vcard bio">
                            <img
                              :src="`${require('~/assets/images/default/person_1.jpg')}`"
                              alt="Image placeholder"
                            />
                          </div>
                          <div class="comment-body">
                            <h3>John Doe</h3>
                            <div class="meta">Oct. 29, 2019 at 1:21pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p><a href="#" class="reply">Reply</a></p>
                          </div>

                          <ul class="children">
                            <li class="comment">
                              <div class="vcard bio">
                                <img
                                  :src="`${require('~/assets/images/default/person_1.jpg')}`"
                                  alt="Image placeholder"
                                />
                              </div>
                              <div class="comment-body">
                                <h3>John Doe</h3>
                                <div class="meta">Oct. 29, 2019 at 1:21pm</div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Pariatur quidem laborum
                                  necessitatibus, ipsam impedit vitae autem, eum
                                  officia, fugiat saepe enim sapiente iste iure!
                                  Quam voluptas earum impedit necessitatibus,
                                  nihil?
                                </p>
                                <p><a href="#" class="reply">Reply</a></p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li class="comment">
                  <div class="vcard bio">
                    <img
                      :src="`${require('~/assets/images/default/person_1.jpg')}`"
                      alt="Image placeholder"
                    />
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta">Oct. 29, 2019 at 1:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>
                </li>
              </ul>
              <!-- END comment-list -->

              <div class="comment-form-wrap pt-5">
                <h3 class="mb-5">Leave a comment</h3>
                <form action="#" class="p-5 bg-light">
                  <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" class="form-control" id="name" />
                  </div>
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email" />
                  </div>
                  <div class="form-group">
                    <label for="website">Website</label>
                    <input type="url" class="form-control" id="website" />
                  </div>

                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea
                      name=""
                      id="message"
                      cols="30"
                      rows="10"
                      class="form-control"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Post Comment"
                      class="btn py-3 px-4 btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- .col-md-8 -->
          <div class="col-md-4 sidebar ftco-animate">
            <div class="sidebar-box">
              <form action="#" class="search-form">
                <div class="form-group">
                  <span class="icon icon-search"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>
            <div class="sidebar-box ftco-animate">
              <div class="categories">
                <h3>Categories</h3>
                <li>
                  <a href="#">Ferrari <span>(12)</span></a>
                </li>
                <li>
                  <a href="#">Cheverolet <span>(22)</span></a>
                </li>
                <li>
                  <a href="#">Ford <span>(37)</span></a>
                </li>
                <li>
                  <a href="#">Subaru <span>(42)</span></a>
                </li>
                <li>
                  <a href="#">Toyota <span>(14)</span></a>
                </li>
                <li>
                  <a href="#">Mistsubishi <span>(140)</span></a>
                </li>
              </div>
            </div>

            <div class="sidebar-box ftco-animate">
              <h3>Recent Blog</h3>
              <div class="block-21 mb-4 d-flex">
                <a
                  class="blog-img mr-4"
                  :style="`background-image: url('${require('~/assets/images/default/image_1.jpg')}')`"
                ></a>
                <div class="text">
                  <h3 class="heading">
                    <a href="#"
                      >Why Lead Generation is Key for Business Growth</a
                    >
                  </h3>
                  <div class="meta">
                    <div>
                      <a href="#"
                        ><span class="icon-calendar"></span>Oct. 29, 2019</a
                      >
                    </div>
                    <div>
                      <a href="#"><span class="icon-person"></span> Admin</a>
                    </div>
                    <div>
                      <a href="#"><span class="icon-chat"></span> 19</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
                <a
                  class="blog-img mr-4"
                  :style="`background-image: url('${require('~/assets/images/default/image_2.jpg')}')`"
                ></a>
                <div class="text">
                  <h3 class="heading">
                    <a href="#"
                      >Why Lead Generation is Key for Business Growth</a
                    >
                  </h3>
                  <div class="meta">
                    <div>
                      <a href="#"
                        ><span class="icon-calendar"></span>Oct. 29, 2019</a
                      >
                    </div>
                    <div>
                      <a href="#"><span class="icon-person"></span> Admin</a>
                    </div>
                    <div>
                      <a href="#"><span class="icon-chat"></span> 19</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
                <a
                  class="blog-img mr-4"
                  :style="`background-image: url('${require('~/assets/images/default/bg_3.jpg')}')`"
                ></a>
                <div class="text">
                  <h3 class="heading">
                    <a href="#"
                      >Why Lead Generation is Key for Business Growth</a
                    >
                  </h3>
                  <div class="meta">
                    <div>
                      <a href="#"
                        ><span class="icon-calendar"></span>Oct. 29, 2019</a
                      >
                    </div>
                    <div>
                      <a href="#"><span class="icon-person"></span> Admin</a>
                    </div>
                    <div>
                      <a href="#"><span class="icon-chat"></span> 19</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <div class="tagcloud">
                <a href="#" class="tag-cloud-link">dish</a>
                <a href="#" class="tag-cloud-link">menu</a>
                <a href="#" class="tag-cloud-link">food</a>
                <a href="#" class="tag-cloud-link">sweet</a>
                <a href="#" class="tag-cloud-link">tasty</a>
                <a href="#" class="tag-cloud-link">delicious</a>
                <a href="#" class="tag-cloud-link">desserts</a>
                <a href="#" class="tag-cloud-link">drinks</a>
              </div>
            </div>

            <div class="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- .section -->
</template>

<script>
export default {
  name: "news-slug",
  layout: "default",
  head() {
    return {
      title: `D & N | Artikel | ${this.post.fields.title}`,
    };
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    post() {
      let post = this.$store.state.allposts.filter(
        (d) => d.fields.slug === this.slug
      );
      return post[0];
    },
  },
};
</script>
