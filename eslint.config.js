import globals from 'globals';
import { fileURLToPath } from 'url';
import path from 'path';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  pluginJs.configs.recommended,
  ...compat.extends('airbnb-base'),
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'no-underscore-dangle': [
        'error',
        { allow: ['__filename', '__dirname'] },
      ],
      'import/extensions': ['error', { js: 'always' }],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
