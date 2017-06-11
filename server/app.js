import morgan from 'morgan';
import express from 'express';
import expressWinston from 'express-winston';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import mongoose  from 'mongoose';
import httpStatus from 'http-status';

import config from './configs/config';
import winstonInstance from './configs/winston';
import routes from './routes/index.routes';
import APIError from './helpers/APIError';
import  './configs/mongoose';

const app = express();

app.use(cors());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
!config.isProd && app.use(morgan('dev'));

// enable detailed API logging in dev env
if (!config.isProd) {
  expressWinston.requestWhitelist.push('body');
  expressWinston.requestWhitelist.push('body');

  app.use(expressWinston.logger({
    winstonInstance,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true
  }));
}

// mount all routes on /api path
app.use('/api', routes);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (err instanceof APIError) return next(err);

  const apiError = new APIError(err.message, err.status, err.isPublic);
  return next(apiError);
});

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API Not Found', httpStatus.NOT_FOUND);
  return next(err);
});

// log error in winston transports
app.use(expressWinston.errorLogger({
  winstonInstance
}));

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    stack: config.isProd ? {} : err.stack,
  });
});

if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', true);
}

app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});
