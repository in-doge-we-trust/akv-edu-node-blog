const fs = require('fs');
const path = require('path');

const chalk = require('chalk');

const { envFilePath, buildFolderPath } = require('./paths');

function copyEnvToBuildFolder() {
  console.log(chalk.cyan('Checking whether .env file exists or not...'));
  console.log('');

  if (fs.existsSync(envFilePath)) {
    console.log(chalk.green('Found existing .env file!'));
  } else {
    console.log(chalk.red('Error: Could not find .env file!'));
    console.log('');
    process.exit(1);
  }

  console.log('');
  console.log(chalk.cyan('Copying .env file...'));

  try {
    fs.copyFileSync(envFilePath, path.join(buildFolderPath, '.env'));
  } catch (err) {
    console.log(chalk.red('An error occurred while copying .env file!'));
    console.error(err);

    process.exit(1);
  }

  console.log('');
  console.log(chalk.green('Copied .env file to build directory successfully!'));
}

module.exports = copyEnvToBuildFolder;
