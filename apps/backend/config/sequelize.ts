import { Sequelize } from 'sequelize';

import { PostModel } from '../models/post';
import { UserModel } from '../models/user';
import { UserAuthInfoModel } from '../models/user-auth-info';
import { UserAuthTokenModel } from '../models/user-auth-token';
import { UserRoleModel } from '../models/user-role';

import { UserToUserRoleJunction } from '../models/junctions/user-to-user-role';

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

const initSequelize = (): void => {
  const models = [
    PostModel,
    UserModel,
    UserAuthInfoModel,
    UserAuthTokenModel,
    UserRoleModel,

    // Junctions
    UserToUserRoleJunction,
  ];

  models.forEach((model) => {
    model.initializeModel(sequelize);
  });

  models.forEach((model) => {
    model.associateModel();
  });
};
initSequelize();
