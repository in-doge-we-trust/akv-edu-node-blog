import { DataTypes } from 'sequelize';

import { POSTGRES_DB } from '../config/env';
import { sequelize } from '../config/sequelize';
import type { UmzugMigration } from '../config/umzug';

export const up: UmzugMigration = async ({ context }) => {
  // Do your stuff

  return sequelize.transaction(async (transaction) => {
    await context.createDatabase(POSTGRES_DB);

    await context.createTable(
      'users',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        role: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        fullName: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        email: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        posts: {
          type: DataTypes.ARRAY(DataTypes.UUID),
          allowNull: false,
          defaultValue: [],
        },
        authInfo: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      { transaction },
    );

    await context.createTable(
      'posts',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        title: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        author: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      { transaction },
    );
  });
};

export const down: UmzugMigration = async ({ context }) => {
  // Do your stuff

  return sequelize.transaction(async (transaction) => {
    await context.dropTable('users', { transaction });
    await context.dropTable('posts', { transaction });
  });
};
