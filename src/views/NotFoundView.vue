<script setup>
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import { useI18n } from "vue-i18n";

const {t} = useI18n();
const router = useRouter();

const goHome = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <div class="container">
    <h1>404</h1>
    <p>{{ t('notFound.message') }}</p>
    <Button @click="goHome">{{ t('notFound.button') }}</Button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  text-align: center;
  gap: 20px;
}
</style>
