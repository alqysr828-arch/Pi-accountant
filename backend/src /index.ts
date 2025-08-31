import express from "express";
import cors from "cors";
import { env } from "./environments.js";
import routes from "./routes/index.js";
import { connectMongo } from "./db/connect.js";
import { log } from "./utils/logger.js";

const app = express();

const corsOrigins = env.corsOrigins.length ? env.corsOrigins : [env.frontendUrl];
app.use(cors({ origin: corsOrigins, credentials: true }));

app.use(express.json());
app.use("/api", routes);

async function bootstrap() {
  try {
    await connectMongo();
    log(Connected to MongoDB at ${env.mongoHost}/${env.mongoDbName});
  } catch (e) {
    log("Mongo connection failed (continuing with in-memory store for demo):", String(e));
  }
  app.listen(env.port, () => log(Backend listening on http://localhost:${env.port} (env: ${env.appEnv})));
}

bootstrap();
