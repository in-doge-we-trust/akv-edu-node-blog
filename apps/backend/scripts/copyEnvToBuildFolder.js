import path from 'path';
import url from 'url';
import fs from 'fs';

import chalk from 'chalk';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

function copyEnvToBuildFolder() {
  console.log(chalk.cyan('Checking whether .env file exists or not...'));
  console.log('');

  if (fs.existsSync(path.join(__dirname, '..', '.env'))) {
    console.log(chalk.green('Found existing .env file!'));
  } else {
    console.log(chalk.red('Error: Could not find .env file!'));
    console.log('');
    process.exit(1);
  }

  console.log('');
  console.log(chalk.cyan('Copying .env file...'));

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

export default copyEnvToBuildFolder;
