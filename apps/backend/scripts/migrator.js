/**
 * Since umzug and sequelize configs are written
 * using TS, ts-node instance is required to
 * compile them + deps on-the-fly
 */
require('ts-node').register();

const { umzug } = require('../config/umzug');

if (require.main === module) {
  umzug.runAsCLI();
}
