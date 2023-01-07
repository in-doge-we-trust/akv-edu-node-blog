import chalk from 'chalk';
import esbuild from 'esbuild';

import cleanBuildFolder from './cleanBuildFolder.js';
import copyEnvToBuildFolder from './copyEnvToBuildFolder.js';

const build = async () => {
  cleanBuildFolder();

  console.log('');
  console.log('------------------------------------');
  console.log('');

  console.log(chalk.cyan('Starting the build...'));
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
