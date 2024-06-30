const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
var DELIM_SIZE = 4;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());