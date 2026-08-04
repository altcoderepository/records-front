export const ENV = {
  DEV_PORT: Number(import.meta.env.VITE_PORT || 8080),
  DEV_HOST: import.meta.env.VITE_HOST,
  DEV_PREFIX: import.meta.env.VITE_API_PREFIX,
  DEV_URL: `${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}${import.meta.env.VITE_API_PREFIX}`,
} as const;
