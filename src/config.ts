import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  packageName: parseInt(required("PACKAGE_NAME", process.env.PACKAGE_NAME), 10),
} as const;

function required(key: string, value: string | undefined): string {
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is required`);
  }
  return value;
}
