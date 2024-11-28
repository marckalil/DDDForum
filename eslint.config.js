import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.next/**',
      '**/out/**',
      '**/.expo/**',
      '**/web-build/**',
      '**/android/**',
      '**/ios/**'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect React version
      }
    },
    plugins: {
      import: pluginImport,
      prettier: pluginPrettier,
      'unused-imports': pluginUnusedImports
    },
    rules: {
      // Import rules
      'import/extensions': ['error', 'never'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index'
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['react']
        }
      ],
      // General rules
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      // String quotes
      'jsx-quotes': ['error', 'prefer-double'],
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      'unused-imports/no-unused-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      // File extensions
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.tsx', '.jsx'] }
      ]
    }
  }
];
