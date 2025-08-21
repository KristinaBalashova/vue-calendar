export const prepareMonthsData = (firstDayOfTheWeek: number, daysInMonth: number) => {

  const weeks = [];
  let currentWeek = Array(7).fill(null);
  let day = 1;

  
  for (let i = 0; i < 7; i++) {
    if (i >= firstDayOfTheWeek -1 && day <= daysInMonth) {
      currentWeek[i] = day++;
    }
  }
  weeks.push(currentWeek);

  while (day <= daysInMonth) {
    currentWeek = Array(7).fill(null);
    for (let i = 0; i < 7; i++) {
      if (day <= daysInMonth) {
        currentWeek[i] = day++;
      }
    }
    weeks.push(currentWeek);
  }

  return weeks;
};
