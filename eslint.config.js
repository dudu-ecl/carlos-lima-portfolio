/*
=====================================================
CONFIGURAÇÃO: ESLint

Responsabilidade:

Configurar a análise estática do código
JavaScript e JSX da aplicação.

A configuração aplica regras para:

- JavaScript;
- React Hooks;
- React Refresh;
- Ambiente do navegador.

A pasta dist é ignorada por conter
arquivos gerados automaticamente pelo build.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
