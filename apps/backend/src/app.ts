import Fastify from 'fastify';
import chalk from 'chalk';

import { PORT } from './config/env';
import { SequelizeDriver } from './sequelize';

const app = Fastify({
  logger: true,
});

app.get('/', (_req, reply) => {
  reply.status(200).send({
    message: 'Welcome to Akv Edu Node Blog app API, stranger!',
  });
});

const startApp = async () => {
  try {
    const dbDriver = new SequelizeDriver();
    await dbDriver.syncModels();

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
  } catch (err) {
    console.log(chalk.red('App exited with error...'));
    console.error(chalk.red(err));

    process.exit(1);
  }
};

startApp();
