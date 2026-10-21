import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier/flat';

export default tseslint.config(
  // deploy/ tiene su propio package.json (cf y wrangler) y no entra en el tsconfig de la app.
  { ignores: ['dist', 'node_modules', 'src/app/components/ui', 'deploy'] },

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      // Typed linting: usa el type-checker, detecta bugs que el analisis
      // sintactico no ve (promesas sin await, comparaciones imposibles).
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactHooks.configs.flat['recommended-latest'],
      jsxA11y.flatConfigs.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Permite `_foo` como marca explicita de "no lo uso a proposito"
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },

  // Archivos de config: corren en Node, no en el browser
  {
    files: ['*.config.{js,ts,mjs}'],
    languageOptions: { globals: globals.node },
  },

  // SIEMPRE ultimo: apaga las reglas de ESLint que pelean con Prettier
  prettier,
);
