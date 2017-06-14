import mongoose from 'mongoose';
import bluebird from 'bluebird';
import config from './config';

// make bluebird default Promise
Promise = bluebird; // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// Create the database connection
mongoose.connect(config.mongo.host);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  console.info(`Mongoose default connection open to ${config.mongo.host}`);
});

// If the connection throws an error
mongoose.connection.on('error', err => {
  throw new Error(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  throw new Error('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    throw new Error('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
}); 
