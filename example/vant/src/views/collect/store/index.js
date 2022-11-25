import { defineStore } from 'pinia';

export const useCollectStore = defineStore('collect', {
  state: () => ({
    collect: 2,
  }),
  getters: {},
  actions: {},
  persist: true,
});
