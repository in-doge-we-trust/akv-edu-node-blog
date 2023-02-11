import { Sequelize } from 'sequelize';

import { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, DB_PORT } from './env';

export const sequelize = new Sequelize(
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  {
    dialect: 'postgres',
    port: DB_PORT,
  },
);
