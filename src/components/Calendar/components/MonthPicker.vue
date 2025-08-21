<script setup>
import { ref, computed } from "vue";
import { months } from "../calendarData.js";
import { useI18n } from "vue-i18n";

const props = defineProps({
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
});

const emit = defineEmits(["updateMonth", "updateYear"]);

const { t } = useI18n();

const selectedYear = ref(props.year);
const selectedMonth = ref(props.month);

const selectedMonthName = computed(() => {
  return months[selectedMonth.value].full;
});

const prevMonth = () => {
  if (selectedMonth.value === 0) {
    selectedMonth.value = 11;
    selectedYear.value -= 1;
  } else {
    selectedMonth.value -= 1;
  }
  emit('updateMonth', selectedMonth.value);
};

const nextMonth = () => {
  if (selectedMonth.value === 11) {
    selectedMonth.value = 0;
    selectedYear.value += 1;
  } else {
    selectedMonth.value += 1;
  }
  emit('updateMonth', selectedMonth.value);
};

</script>

<template>
  <div class="container">
    <button class="nav-button" @click="prevMonth" type="button"><</button>
    <span>
        {{ t(selectedMonthName) }}
    </span>
    <select v-model="selectedYear" class="year-select" @change="emit('updateYear', selectedYear)">
      <option v-for="year in 50" :key="year" :value="year + 2000">
        {{ year + 2000 }}
      </option>
    </select>

    <button class="nav-button" @click="nextMonth" type="button">></button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.year-select {
  padding: 6px 10px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

</style>
