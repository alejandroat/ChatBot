import dotenv from "dotenv";
import app from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./logger/index.js";
dotenv.config();


app.listen(env.PORT, () => {
  logger.info(`Server running on port ${env.PORT}`);
});
