const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const currentDate = () => new Date().toLocaleDateString('en-US');