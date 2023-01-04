import dotenv from 'dotenv';
import Fastify from 'fastify';
import chalk from 'chalk';
import path from 'path';

// SETTING UP ENV

// <<<< START >>>>
const { NODE_ENV = 'production' } = process.env;
console.log(chalk.yellow(`Environment type is set to "${NODE_ENV}"!`));

let envFileName = '';
switch (NODE_ENV) {
  case 'development':
    envFileName = '.env.local';
    break;
  default:
    envFileName = '.env';
}

let envFilePath = '';
switch (NODE_ENV) {
  case 'development':
    envFilePath = path.join(__dirname, '..', envFileName);
    break;
  default:
    envFilePath = path.join(__dirname, envFileName);
}

console.log({ envFilePath });

dotenv.config({
  path: envFilePath,
});
// <<<< END >>>>

const app = Fastify({
  logger: true,
});

app.get('/', (req, reply) => {
  reply.status(200).send({
    message: 'Welcome to Akv Edu Node Blog app API, stranger!',
  });
});

const PORT = process.env.PORT as unknown as number;

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
