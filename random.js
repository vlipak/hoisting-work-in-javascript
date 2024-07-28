const minNumber = arr => Math.min(...arr);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const executableName = getExecutableName(channel, appName);