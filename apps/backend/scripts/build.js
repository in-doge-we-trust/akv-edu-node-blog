/* eslint-disable @typescript-eslint/no-var-requires */

const chalk = require('chalk');
const esbuild = require('esbuild');

const cleanBuildFolder = require('./cleanBuildFolder');
const copyEnvToBuildFolder = require('./copyEnvToBuildFolder');

const build = async () => {
  cleanBuildFolder();

  console.log('');
  console.log('------------------------------------');
  console.log('');

  console.log(chalk.blue('Starting the build...'));
  console.log('');

  try {
    await esbuild.build({
      entryPoints: ['src/app.ts'],
      bundle: true,
      minify: true,
      sourcemap: false,
      platform: 'node',
      target: 'node18',
      outdir: './dist',
      logLevel: 'info',
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
