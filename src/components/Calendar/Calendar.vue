<script setup>
import { watch } from "vue";
import MonthPicker from "./components/MonthPicker.vue";
import { useI18n } from "vue-i18n";
import useCalendar from "../../composables/useCalendar.js";

const { t } = useI18n();

const emit = defineEmits(["setDate"]);

const props = defineProps({
  date: {
    type: [String, Date],
    default: () => new Date(),
  },
});

const {
  currentDate,
  currentMonth,
  currentYear,
  currentDay,
  weekdaysShort,
  dataForTable,
  selectDay,
  setNewMonth,
  setNewYear,
} = useCalendar(props.date);

watch(currentDate, (newVal) => {
  emit("setDate", newVal);
}, { deep: true });

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
  background-color: #ffe6e684;;
  color: rgb(0, 0, 0);
}

.month-picker {
  margin-bottom: 10px;
}
.weekday-button {
  cursor: pointer;
}
</style>
