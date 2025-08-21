import { defineStore } from 'pinia';

export type LANGS = 'en' | 'ru';

export const useLang = defineStore('lang', {
  state: () => ({
    locale: 'ru' as LANGS,
    currentLang: 'ru' as LANGS ,
  }),

  getters: {
  },

  actions: {
    setLocale(newLocale: LANGS) {
      this.locale = newLocale;
    },
    
  },
});

export default useLang