import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import importPlugin from "eslint-plugin-import";
import perfectionisPlugin from "eslint-plugin-perfectionist";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: ["@typescript-eslint", "prettier"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@app", "./src/app"],
            ["@entries", "./src/entries"],
            ["@features", "./src/features/*"],
            ["@pages", "./src/pages"],
            ["@shared", "./src/shared"],
            ["@widgets", "./src/widgets"],
            ["@env", "./src/env"],
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },
      },
    },
  },
]);
