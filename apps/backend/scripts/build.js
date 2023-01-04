/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const esbuild = require('esbuild');

const cleanBuildFolder = () => {
  const distDir = path.join(__dirname, '..', 'dist');

  console.log('');
  console.log(
    chalk.blue(`Checking whether build folder (${distDir}) exists or not...`),
  );
  console.log('');

  const isBuildFolderExist = fs.existsSync(distDir);

  if (isBuildFolderExist) {
    console.log(chalk.yellow('Found existing build folder!'));

    console.log('');
    console.log('------------------------------------');
    console.log('');

    console.log(chalk.blue('Cleaning the build folder...'));
    console.log('');

    fs.rmSync(distDir, { recursive: true });

    console.log(chalk.green('Cleaned build folder successfully!'));
  } else {
    console.log(chalk.blue('Build folder was not found.'));
  }
};

const copyEnvFile = () => {
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
  console.log(chalk.green('Copied .env file to build directory successfully!'));
  console.log('');
};

const build = async () => {
  cleanBuildFolder();

  console.log('');
  console.log('------------------------------------');
  console.log('');

  console.log(chalk.blue('Starting the build...'));
  console.log('');

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

  console.log('');
  console.log(chalk.green('<<<< Build succeeded! >>>>'));

  copyEnvFile();
};

build();
