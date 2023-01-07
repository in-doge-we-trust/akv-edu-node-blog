import path from 'path';
import url from 'url';
import fs from 'fs';

import chalk from 'chalk';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

function cleanBuildFolder() {
  const distDir = path.join(__dirname, '..', 'dist');

  console.log(
    chalk.cyan(`Checking whether build folder (${distDir}) exists or not...`),
  );
  console.log('');

  const isBuildFolderExist = fs.existsSync(distDir);

  if (isBuildFolderExist) {
    console.log(chalk.yellow('Found an existing build folder!'));

    console.log('');
    console.log(chalk.cyan('Cleaning the build folder...'));
    console.log('');

    fs.rmSync(distDir, { recursive: true });

    console.log(chalk.green('Cleaned build folder successfully!'));
  } else {
    console.log(chalk.cyan('Build folder was not found.'));
  }
}

export default cleanBuildFolder;
