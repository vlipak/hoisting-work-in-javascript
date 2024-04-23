const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const getRandomBoolean = () => Math.random() >= 0.5;