import mongoose from "mongoose";
import { env } from "../environments.js";

export async function connectMongo() {
  const auth = env.mongoUser && env.mongoPass ? ${env.mongoUser}:${env.mongoPass}@ : "";
  const uri = mongodb://${auth}${env.mongoHost}/${env.mongoDbName}?authSource=admin;
  await mongoose.connect(uri);
  return mongoose.connection;
}
