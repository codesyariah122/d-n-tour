import client from "~/plugins/contentful";

export const state = () => ({
  hero: null,
  posts: null,
  allposts: null,
});

export const mutations = {
  getHero: (state, val) => {
    state.hero = val;
  },
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  allPosts: (state, posts) => {
    state.allposts = posts;
  },
};

export const actions = {
  async getHeroContent({ commit }) {
    try {
      if (!client) return 0;
      const response = await client.getEntries({
        content_type: "webcontent",
      });
      if (response.items.length > 0) commit("getHero", response.items);
    } catch (e) {
      console.error(e);
    }
  },
  async getBlogContent({ commit }) {
    try {
      if (!client) return 0;
      const response = await client.getEntries({
        content_type: "news",
        order: "-sys.createdAt",
        limit: 3,
      });
      if (response.items.length > 0) commit("updatePosts", response.items);
    } catch (err) {
      console.error(err);
    }
  },
  async getAllPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "news",
        order: "-sys.updatedAt",
        limit: 100,
      });
      if (response.items.length > 0) commit("allPosts", response.items);
    } catch (err) {
      console.error(err);
    }
  },
};
