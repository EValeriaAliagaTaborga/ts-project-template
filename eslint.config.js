import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier/flat";

export default defineConfig(
    { ignores: ["dist/", "node_modules/", "logs/", "vscode/", "coverage/"] },
    js.configs.recommended,      // core JS rules
    tseslint.configs.recommended, // TypeScript-aware rules
    prettier,                     // must be LAST: turns off style rules that conflict with Prettier
);