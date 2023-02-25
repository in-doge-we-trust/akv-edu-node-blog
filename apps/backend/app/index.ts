import Fastify from 'fastify';
import chalk from 'chalk';

import { PORT } from '../config/env';

import { initDB } from './pre-start/database';

async function run() {
  await initDB();

  const app = Fastify({
    logger: true,
  });

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

      console.log(chalk.green(`\nServer is listening on port ${PORT}...\n`));
    },
  );
}

run();
