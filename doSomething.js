const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
[foo, bar] = [bar, foo];