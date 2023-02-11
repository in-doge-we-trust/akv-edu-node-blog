export const migrationTemplate = `import { DataTypes } from 'sequelize';

import type { UmzugMigration } from '../config/umzug';

export const up: UmzugMigration = async ({ context }) => {
  // Do your stuff
};

export const down: UmzugMigration = async ({ context }) => {
  // Do your stuff
};
`;
