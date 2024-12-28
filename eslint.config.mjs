import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import tailwind from 'eslint-plugin-tailwindcss';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript']
  }),
  eslintConfigPrettier,
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  }
];

export default eslintConfig;
