import path from 'path';

import { Umzug, JSONStorage } from 'umzug';

import { sequelize } from './sequelize';
import { migrationTemplate } from './migration-template';

export const umzug = new Umzug({
  migrations: {
    glob: 'migrations/*.ts',
  },
  create: {
    folder: path.join(__dirname, '..', 'migrations'),
    template: (filepath) => [[filepath, migrationTemplate]],
  },
  context: sequelize.getQueryInterface(),
  logger: console,
  storage: new JSONStorage({
    path: path.join(__dirname, '..', 'migrations', 'migrations-storage.json'),
  }),
});

export type UmzugMigration = typeof umzug._types.migration;

if (require.main === module) {
  umzug.runAsCLI();
}
