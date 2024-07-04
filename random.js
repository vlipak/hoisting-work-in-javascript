const uniqueArray = arr => [...new Set(arr)];
const merge = [...new Set(a.concat(b))];
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);