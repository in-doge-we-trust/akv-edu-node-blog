const fs = require('fs');

const chalk = require('chalk');

const { buildFolderPath } = require('./paths');

function cleanBuildFolder() {
  console.log(
    chalk.cyan(
      `Checking whether build folder (${buildFolderPath}) exists or not...`,
    ),
  );
  console.log('');

  const isBuildFolderExist = fs.existsSync(buildFolderPath);

  if (isBuildFolderExist) {
    console.log(chalk.yellow('Found an existing build folder!'));

    console.log('');
    console.log(chalk.cyan('Cleaning the build folder...'));
    console.log('');

    fs.rmSync(buildFolderPath, { recursive: true });

    console.log(chalk.green('Cleaned build folder successfully!'));
  } else {
    console.log(chalk.cyan('Build folder was not found.'));
  }
}

module.exports = cleanBuildFolder;
