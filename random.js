const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isEmptyArray = arr => !arr.length;
const merge = [...new Set(a.concat(b))];