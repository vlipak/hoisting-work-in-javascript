console.log("0 || 1 = "+(0 || 1));
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};