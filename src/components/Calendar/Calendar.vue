<script setup>
import { ref, computed } from "vue";
import MonthPicker from "./components/MonthPicker.vue";
import { weekdays, months } from "./calendarData.js";
import { useI18n } from "vue-i18n";
import { prepareMonthsData } from "./utils.js";

const { t } = useI18n();

const emit = defineEmits(["setDate"]);

const props = defineProps({
  date: {
    type: [String, Date],
    default: () => new Date(),
  },
});

const currentDate = ref(
  typeof props.date === "string" ? new Date(props.date) : props.date
);

const currentMonth = ref(currentDate.value.getMonth());
const currentYear = ref(currentDate.value.getFullYear());
const currentDay = ref(currentDate.value.getDate());

const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay();
});

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

const weeksInMonth = computed(() => {
  return Math.ceil(daysInMonth.value / 7);
});

const weekdaysShort = computed(() => {
  return weekdays.map((day) => ({ day: day.short, id: day.id }));
});

const dataForTable = computed(() =>
  prepareMonthsData(firstDayOfMonth.value, daysInMonth.value)
);

const selectDay = (day) => {
  if (!day) return;
  currentDay.value = day;
  emit(
    "setDate",
    new Date(currentYear.value, currentMonth.value, currentDay.value)
  );
};

const setNewMonth = (newMonth) => {
  currentMonth.value = newMonth;
};

const setNewYear = (newYear) => {
  currentYear.value = newYear;
};
</script>

<template>
  <div class="calendar-box">
    <div class="month-picker">
      <MonthPicker
        :month="currentMonth"
        :year="currentYear"
        @updateMonth="setNewMonth"
        @updateYear="setNewYear"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="day in weekdaysShort" :key="day.id" class="weekday-button">
            {{ t(day.day) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, index) in dataForTable" :key="index" class="week-row">
          <td
            v-for="day in week"
            :key="day"
            class="day-cell"
            :class="{ active: day === currentDay }"
            @click="selectDay(day)"
          >
            {{ day || "" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.calendar-box {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  width: 350px;
  margin: 20px;
}

table {
  width: 100%;
}

thead th,
tbody td {
  text-align: center;
  vertical-align: middle;
  padding: 8px 0;
  width: 15%;
}

tbody td:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}

tbody td.active {
  background-color: #ac5c5c;
  color: white;
}

.month-picker {
  margin-bottom: 10px;
}
.weekday-button {
  cursor: pointer;
}
</style>
