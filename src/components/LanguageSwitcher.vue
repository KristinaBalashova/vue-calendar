<script setup>
import { useLang } from "../store";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

const store = useLang();
const { locale } = storeToRefs(store);
const { locale: i18nLocale } = useI18n();

const setLocale = (newLocale) => {
  store.setLocale(newLocale);
  i18nLocale.value = newLocale;
};

</script>

<template>
  <div>
    <span
      class="locale-button"
      :class="{ active: locale === 'ru' }"
      @click="setLocale('ru')"
    >
      ru
    </span>

    <span
      class="locale-button"
      :class="{ active: locale === 'en' }"
      @click="setLocale('en')"
    >
      en
    </span>
  </div>
</template>

<style scoped>
.locale-button {
  cursor: pointer;
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: border-color 0.3s, background-color 0.3s;
}

.locale-button:hover {
  border-color: #007bff;
}

.locale-button.active {
  border-color: #007bff;
  background-color: #e6f0ff;
  font-weight: bold;
}
</style>
