console.log("0 || 1 = "+(0 || 1));
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');