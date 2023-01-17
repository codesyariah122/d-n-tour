export const strict = false;

export const state = () => ({
  city_drop: [],
  picks: [],
});

export const mutations = {
  CITY_DROP(state, data) {
    state.city_drop = data;
  },
  PICKUP_POINT(state, data) {
    state.picks = data;
  },
};

export const actions = {
  storeCityDrop({ commit }, data) {
    commit("CITY_DROP", data);
  },
  storePickupPoint({ commit }, data) {
    commit("PICKUP_POINT");
  },
};

export const getters = {
  GetCityDrop(state) {
    return state.city_drop;
  },
};
