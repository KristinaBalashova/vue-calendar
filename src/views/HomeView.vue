<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Button from "../components/Button.vue";
import CalendarForm from "../components/CalendarForm.vue";

const isFormOpen = ref(false);

const { t } = useI18n();
const router = useRouter();

const openCalendar = () => {
  router.push("/calendar");
};

const openCalendarForm = () => {
  isFormOpen.value = true;
};

const openCalendarWithDate = (date) => {
  router.push({ name: "calendar", params: { date } });
};
</script>

<template>
  <div class="container">
    <div class="buttons">
      <Button @click="openCalendar">{{ t('openCalendar') }}</Button>
      <Button @click="openCalendarForm">{{ t('openCalendarWithStartDate') }}</Button>
    </div>
    <CalendarForm v-if="isFormOpen" @submit-date="openCalendarWithDate" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
