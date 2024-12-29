import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals', // eslint-config-next
      'next/typescript', // eslint-config-next
      'plugin:tailwindcss/recommended', // eslint-plugin-tailwindcss
      'prettier' // eslint-config-prettier
    ]
  }),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  }
];

export default eslintConfig;
