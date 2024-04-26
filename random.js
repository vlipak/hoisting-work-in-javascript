console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const merge = (a, b) => a.concat(b);
const updated = numbers.filter(element => element > 6);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();