import { ref, computed, watch } from "vue";
import { weekdays } from "../components/Calendar/calendarData.js";
import { prepareMonthsData } from "../components/Calendar/utils.js";

const useCalendar = (initialDate) => {
  const currentDate = ref(new Date(initialDate));

  const currentMonth = ref(currentDate.value.getMonth());
  const currentYear = ref(currentDate.value.getFullYear());
  const currentDay = ref(currentDate.value.getDate());

  const firstDayOfMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value, 1).getDay();
  });

  const daysInMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
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
  };

  const setNewMonth = (newMonth) => {
    currentMonth.value = newMonth;
  };

  const setNewYear = (newYear) => {
    currentYear.value = newYear;
  };

  watch([currentYear, currentMonth, currentDay], ([year, month, day]) => {
    currentDate.value = new Date(year, month, day);
  });
  
  return {
    currentDate,
    currentMonth,
    currentYear,
    currentDay,
    weekdaysShort,
    dataForTable,
    selectDay,
    setNewMonth,
    setNewYear,
  };
};

export default useCalendar;
