import { defineStore } from 'pinia';

export const useAboutStore = defineStore('about', {
  state: () => ({
    details: 'about',
  }),
  getters: {
    getDetailsData: (state) => state.details,
  },
  actions: {
    setDetails(data) {
      this.details = data;
    },
  },
});
