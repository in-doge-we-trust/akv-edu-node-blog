const chalk = require('chalk');
const esbuild = require('esbuild');

const {
  appEntryFilePath,
  buildFolderPath,
  tsConfigBuildPath,
} = require('./paths');

const cleanBuildFolder = require('./cleanBuildFolder');
const copyEnvToBuildFolder = require('./copyEnvToBuildFolder');

const build = async () => {
  cleanBuildFolder();

  console.log('');
  console.log('------------------------------------');
  console.log('');

  console.log(chalk.cyan('Starting the build...'));
  console.log('');

  try {
    await esbuild.build({
      entryPoints: [appEntryFilePath],
      bundle: true,
      minify: true,
      sourcemap: false,
      platform: 'node',
      target: 'node18',
      outdir: buildFolderPath,
      logLevel: 'info',
      tsconfig: tsConfigBuildPath,
    });
  } catch (err) {
    console.log(chalk.red('An error occurred while building the app!'));
    process.exit(1);
  }

  console.log('');
  console.log(chalk.green('<<<< Build succeeded! >>>>'));
  console.log('');
  console.log('------------------------------------');
  console.log('');

  copyEnvToBuildFolder();
};

build();
