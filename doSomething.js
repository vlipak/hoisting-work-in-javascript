const arrayContains = (arr, element) => arr.includes(element);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;