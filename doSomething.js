const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);