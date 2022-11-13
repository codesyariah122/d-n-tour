import client from "~/plugins/contentful";

export const state = () => ({
  hero: null,
});

export const mutations = {
  getHero: (state, val) => {
    state.hero = val;
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
};
