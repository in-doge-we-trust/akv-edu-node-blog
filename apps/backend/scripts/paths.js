const path = require('path');

const rootPath = path.join(__dirname, '..');

const buildFolderPath = path.join(rootPath, 'dist');

const tsConfigPath = path.join(rootPath, 'tsconfig.json');
const tsConfigBuildPath = path.join(rootPath, 'tsconfig.build.json');

const envFilePath = path.join(rootPath, '.env');

const appEntryFilePath = path.join(rootPath, 'src', 'app.ts');

module.exports = {
  rootPath,

  buildFolderPath,

  tsConfigPath,
  tsConfigBuildPath,

  envFilePath,

  appEntryFilePath,
};
