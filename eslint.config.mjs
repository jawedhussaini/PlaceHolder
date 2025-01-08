import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disables unused variables check
      "@typescript-eslint/no-explicit-any": "warn", // Warns instead of throwing an error for `any` type
      "react-hooks/exhaustive-deps": "warn", // Adjusts severity to warning
      "@next/next/no-img-element": "off", // Disables warning for <img> instead of <Image />
    },
  },
];


export default eslintConfig;
