<script setup>
import { ref, computed } from "vue";
import Calendar from "../components/Calendar/Calendar.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { getFormattedDate } from "../utils";

const router = useRouter();

const { t } = useI18n();

const initialDate = computed(() => {
  router.currentRoute.value.params.date;
});

const currentDate = ref(initialDate.value);

const setDate = (newDate) => {
  currentDate.value = newDate;
};
</script>

<template>
  <div class="calendar-container">
    <Calendar :date="initialDate" @setDate="setDate" />
    <p class="date-info">
      <span class="label">{{ t("selectedDate") }}:</span>
      <span class="value">{{ currentDate ? getFormattedDate(currentDate) : t("noDateSelected") }}</span>
    </p>
  </div>
</template>

<style scoped>
.calendar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.date-info {
  padding: 8px 12px;
  background-color: #f5f5f5;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}
.label {
  font-weight: 600;
  margin-right: 6px;
  color: #555;
}

.value {
  font-weight: 500;
  color: #111827;
}
</style>
