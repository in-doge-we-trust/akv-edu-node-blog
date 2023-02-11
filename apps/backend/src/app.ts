import Fastify from 'fastify';
import chalk from 'chalk';

import { PORT } from '../config/env';
import { sequelize } from '../config/sequelize';

const run = async () => {
  const app = Fastify({
    logger: true,
  });

  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log(
      chalk.yellow(`An error occurred while testing the DB connection!`),
    );
    console.log(chalk.red(e));
  }

  app.get('/', (_req, reply) => {
    reply.status(200).send({
      message: 'Welcome to Akv Edu Node Blog app API, stranger!',
    });
  });

  app.listen(
    {
      port: PORT,
    },
    (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log(chalk.green(`Server is listening on port ${PORT}...`));
    },
  );
};

run();
