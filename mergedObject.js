const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const minNumber = arr => Math.min(...arr);
const resultingPromises = urls.map((url) => makHttpRequest(url));