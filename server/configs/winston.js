import winston from 'winston';

const winstonInstance = new winston.Logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
});

export default winstonInstance;
