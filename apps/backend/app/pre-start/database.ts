import chalk from 'chalk';
import { POSTGRES_DB } from '../../config/env';

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

const createDBIfNotExists = async () => {
  console.log(chalk.cyan('An attempt to create DB...'));

  try {
    await sequelize.getQueryInterface().createDatabase(POSTGRES_DB);

    console.log(chalk.green(`Successfully created the DB (${POSTGRES_DB})!`));
  } catch (e) {
    console.log(chalk.yellow('DB was not created. Reason:'));
    console.log(chalk.red(e));
  }
};

export const initDB = async () => {
  try {
    await testDBConnection();
    await createDBIfNotExists();

    await sequelize.sync({ alter: true });
  } catch {
    console.log(chalk.red('Failed to initialize DB!'));
    process.exit(1);
  }
};
