import chalk from 'chalk';

import { sequelize } from '../../config/sequelize';

const testDBConnection = async () => {
  console.log(chalk.cyan('Testing the DB connection...'));

  try {
    await sequelize.authenticate();

    console.log(chalk.green('DB is accessible!'));
  } catch (e) {
    console.log(
      chalk.red('An error occurred while trying to connect to the DB!'),
    );
    console.log(chalk.red(e));
  }
};

export const initDB = async () => {
  try {
    await testDBConnection();

    await sequelize.sync({ force: true });
  } catch {
    console.log(chalk.red('Failed to initialize DB!'));
    process.exit(1);
  }
};
