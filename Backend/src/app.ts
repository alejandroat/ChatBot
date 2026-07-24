import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middlewares.js";

const app = express();

app.use(helmet());
app.use(errorMiddleware);

app.use(cors());

app.use(express.json());
app.use(router);

export default app;
