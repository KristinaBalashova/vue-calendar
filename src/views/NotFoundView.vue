<script setup>
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
const router = useRouter();

const goHome = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <div class="container">
    <h1>404</h1>
    <p>Страница не найдена</p>
    <Button @click="goHome">На главную</Button>
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
