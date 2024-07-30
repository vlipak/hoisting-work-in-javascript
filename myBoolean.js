const channel = getChannel(computedAppVersion);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const intermediateAppPath = path.join(buildOutputPath, 'app');