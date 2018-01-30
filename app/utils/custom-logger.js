import {createLogger, format, transports} from 'winston';
const {combine, timestamp, label, printf} = format;

const customFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

export default createLogger({
  format: combine(
    label({label: 'app log'}),
    timestamp(),
    customFormat
  ),
  transports: [new transports.Console()]
});