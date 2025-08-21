import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './routes';
import en from './locales/en.json';
import ru from './locales/ru.json';

import { createI18n } from 'vue-i18n';

const pinia = createPinia();

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  flatJson: true,
  messages: {
    ru,
    en
  },
});


createApp(App)
.use(i18n)
.use(router)
.use(pinia)
.mount('#app')

