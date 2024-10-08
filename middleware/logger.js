import winston from "winston";
import morgan from "morgan";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

const requestLogger = morgan("combined", {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});

export { logger, requestLogger };
