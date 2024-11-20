import dotenv from "dotenv";
import { schemaEnv } from "./@types";

dotenv.config();

export const env = schemaEnv.parse(process.env);