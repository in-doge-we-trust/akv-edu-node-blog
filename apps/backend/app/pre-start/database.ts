import chalk from 'chalk';

import { sequelize } from '../../config/sequelize';

const testDBConnection = async () => {
  console.log(chalk.cyan('\nTesting the DB connection...\n'));

  try {
    await sequelize.authenticate();

    console.log(chalk.green('\nDB is accessible!\n'));
  } catch (e) {
    console.log(
      chalk.red('\nAn error occurred while trying to connect to the DB!\n'),
    );
    console.log(chalk.red(e));
  }
};

export const initDB = async () => {
  try {
    await testDBConnection();

    await sequelize.sync({ force: true });
  } catch {
    console.log(chalk.red('\nFailed to initialize DB!\n'));
    process.exit(1);
  }
};
