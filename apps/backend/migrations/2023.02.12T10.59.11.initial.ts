// import { DataTypes } from 'sequelize';

import type { UmzugMigration } from '../config/umzug';

export const up: UmzugMigration = async ({ context }) => {
  // Do your stuff
  console.log(context);
};

export const down: UmzugMigration = async ({ context }) => {
  // Do your stuff
  console.log(context);
};
