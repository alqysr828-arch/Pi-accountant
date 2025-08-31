import dotenv from "dotenv";
dotenv.config();

export const env = {
  appEnv: process.env.APP_ENV || "development",
  port: Number(process.env.PORT || 8000),
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3314",

  platformApiUrl: process.env.PLATFORM_API_URL || "https://api.minepi.com",
  piAppId: process.env.PI_APP_ID || "",
  piApiKey: process.env.PI_API_KEY || "",
  sessionSecret: process.env.SESSION_SECRET || "change_me",

  corsOrigins: (process.env.CORS_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean),

  mongoHost: process.env.MONGO_HOST || "localhost:27017",
  mongoDbName: process.env.MONGO_DB_NAME || "pi_accountant",
  mongoUser: process.env.MONGO_USERNAME || "",
  mongoPass: process.env.MONGO_PASSWORD || "",

  sandbox: String(process.env.SANDBOX || "true") === "true"
};
