/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs');

const chalk = require('chalk');

function copyEnvToBuildFolder() {
  console.log(chalk.blue('Copying .env file...'));

  try {
    fs.copyFileSync(
      path.join(__dirname, '..', '.env'),
      path.join(__dirname, '..', 'dist', '.env'),
    );
  } catch (err) {
    console.log(chalk.red('An error occurred while copying .env file!'));
    console.error(err);

    process.exit(1);
  }

  console.log('');
  console.log(chalk.green('Copied .env file to build directory successfully!'));
}

module.exports = copyEnvToBuildFolder;
