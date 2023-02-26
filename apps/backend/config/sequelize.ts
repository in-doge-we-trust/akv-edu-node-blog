import { Sequelize } from 'sequelize';

import { PostModel } from '../entities/post/model';
import { UserModel } from '../entities/user/model';
import { UserAuthInfoModel } from '../entities/user-auth-info/model';
import { UserAuthTokenModel } from '../entities/user-auth-token/model';
import { UserRoleModel } from '../entities/user-role/model';

import { UserToUserRoleJunction } from '../entities/junctions/user-to-user-role';

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
