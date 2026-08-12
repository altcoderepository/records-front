import { existsSync } from "fs";

import { envPath } from "../paths/index.ts";

/** Если есть файл .env, забираем переменные окружения из него */
(() => {
  try {
    if (existsSync(envPath)) {
      process.loadEnvFile(envPath);
      return;
    }
  } catch {
    console.warn("Could not find .env.local or .env.local.example files");
  }
})();

// Разработка
const DEV_PORT = Number(process.env.VITE_PORT || 8080);
const DEV_HOST = process.env.VITE_HOST;
const DEV_PREFIX = process.env.VITE_PROXY_PREFIX;

export { DEV_PORT, DEV_HOST, DEV_PREFIX };
