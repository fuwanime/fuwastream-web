import { defineConfig } from "eslint/config";
import tsparser from "@typescript-eslint/parser";
import tsplugin from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsplugin,
    },
    rules: {
      ...tsplugin.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    ignores: ["out/**", ".next/**", "node_modules/**", "next-env.d.ts"],
  },
]);
