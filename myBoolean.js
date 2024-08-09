var regexp  = new RegExp('{{([^}]+)}}', 'g');
const fullName = name || 'buddy';
const isWeekday = (date) => date.getDay() % 6 !== 0;