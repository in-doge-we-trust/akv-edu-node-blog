import { Sequelize } from 'sequelize';

import {
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} from '../config/env';

import { initUserModel } from '../model/user';
import { initPostModel } from '../model/post';

export const sequelize = new Sequelize(
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  {
    dialect: 'postgres',
    port: POSTGRES_PORT,
  },
);

[
  initUserModel,
  initPostModel,
  // Other models init functions go here
].forEach((init) => {
  init(sequelize);
});
