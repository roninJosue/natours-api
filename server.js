const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('./utils/logger');

dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION, Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => logger.info('DB connection successful'));

const port = process.env.PORT || 3010;

const server = app.listen(port, () => {
  logger.info(`running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION, Shutting down...');
  logger.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
