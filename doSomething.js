const merge = [...new Set([...a, ...b])];
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;