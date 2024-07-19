const isWeekday = (date) => date.getDay() % 6 !== 0;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;