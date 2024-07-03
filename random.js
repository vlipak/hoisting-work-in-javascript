const isEven = (num) => num % 2 === 0;
const currentDate = () => new Date().toLocaleDateString('en-US');
const isEmptyObject = obj => Object.keys(obj).length === 0;