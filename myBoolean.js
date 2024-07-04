const intermediateAppPath = path.join(buildOutputPath, 'app');
const buildOutputPath = path.join(repositoryRootPath, 'out');
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");