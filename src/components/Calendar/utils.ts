
export const prepareMonthsData = (firstDayOfTheWeek: number, daysInMonth: number) => {

  const daysInWeek = 7;

  const weeks = Array(Math.ceil((daysInMonth + firstDayOfTheWeek) / daysInWeek)).fill(null);
  let currentWeekIndex = 0;
  let currentWeekDayIndex = firstDayOfTheWeek - 1;

  for(let i = 0; i < daysInMonth; i++) {
    if(weeks[currentWeekIndex] === null) {
      weeks[currentWeekIndex] = Array(daysInWeek).fill(null);
    }
    weeks[currentWeekIndex][currentWeekDayIndex] = i + 1;

    currentWeekDayIndex++;
    if (currentWeekDayIndex === daysInWeek) {
      currentWeekIndex++;
      currentWeekDayIndex = 0;
    }
  }

  return weeks;
};

