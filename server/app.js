import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import config from './configs/config';
import routes from './routes/index.routes';

const app = express();

app.use(cors());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
!config.isProd && app.use(morgan('dev'));

// mount all routes on /api path
app.use('/api', routes);

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: config.isProd ? {} : err.stack,
  });
});

app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});
