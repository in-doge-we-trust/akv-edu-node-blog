/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const distDir = path.join(__dirname, '..', 'dist');

console.log(
  chalk.blue(`Checking whether build folder (${distDir}) exists or not...`),
);
const isBuildFolderExist = fs.existsSync(distDir);

if (isBuildFolderExist) {
  console.log(chalk.yellow('Found existing build folder!'));

  console.log('');
  console.log('------------------------------------');
  console.log('');

  console.log(chalk.blue('Cleaning the build folder...'));

  fs.rmSync(distDir, { recursive: true });

  console.log(chalk.green('Cleaned build folder successfully!'));
}

console.log(chalk.blue('Build folder was not found.'));

console.log('');
console.log('------------------------------------');
console.log('');

console.log(chalk.blue('Starting the build...'));

const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/app.ts'],
    bundle: true,
    minify: true,
    sourcemap: false,
    platform: 'node',
    target: 'node18',
    outdir: './dist',
    logLevel: 'info',
  })
  .then(() => {
    console.log('');
    console.log('------------------------------------');
    console.log('');

    console.log(chalk.green('Build succeeded!'));
  })
  .then(() => {
    console.log('');
    console.log('------------------------------------');
    console.log('');

    console.log(chalk.blue('Copying .env file...'));

    try {
      fs.copyFileSync(
        path.join(__dirname, '..', '.env'),
        path.join(__dirname, '..', 'dist', '.env'),
        fs.constants.COPYFILE_FICLONE,
      );
    } catch (err) {
      console.log(chalk.red('An error occurred while copying .env file!'));
      console.error(err);

      process.exit(1);
    }

    console.log('');
    console.log(
      chalk.green('Copied .env file to build directory successfully!'),
    );
  });
