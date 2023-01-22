import { Sequelize } from 'sequelize';
import chalk from 'chalk';

import {
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} from '../config/env';

import { initUserModel } from '../model/user';
import { initAuthTokenModel } from '../model/auth-token';
import { initPostModel } from '../model/post';

/**
 * Wrapper around `sequelize` that manages instance and provides
 * convenient wrappers for all required functions/methods
 */
export class SequelizeDriver {
  private instance: Sequelize;

  constructor() {
    this.instance = new Sequelize(
      POSTGRES_DB,
      POSTGRES_USER,
      POSTGRES_PASSWORD,
      {
        dialect: 'postgres',
        port: POSTGRES_PORT,
      },
    );

    this.initModels();
  }

  private initModels() {
    [
      initAuthTokenModel,
      initUserModel,
      initPostModel,
      // Other models init functions go here
    ].forEach((init) => {
      init(this.instance);
    });
  }

  async syncModels() {
    try {
      await this.instance.sync({ alter: true });

      console.log(chalk.green('Models were synced successfully!'));
    } catch (err) {
      console.error(
        chalk.red('An error occurred while trying to sync models!'),
      );
      console.error(err);

      throw err;
    }
  }
}
