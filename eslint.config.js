import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const noRawColor = {
  meta: {
    type: 'suggestion',
    messages: {
      noRawColor: 'Raw colour "{{value}}" found. Use a Tailwind token utility or hsl(var(--...)) instead.',
    },
    schema: [],
  },
  create(context) {
    const HEX = /#([0-9a-fA-F]{3,8})\b/
    const RAW = /\b(rgb|hsl|rgba|hsla)\s*\(\s*\d/
    function check(node, raw) {
      if (HEX.test(raw) || RAW.test(raw))
        context.report({ node, messageId: 'noRawColor', data: { value: raw.trim().slice(0, 40) } })
    }
    return {
      Literal(node) { if (typeof node.value === 'string') check(node, node.value) },
      TemplateLiteral(node) { node.quasis.forEach((q) => check(q, q.value.raw)) },
    }
  },
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { local: { rules: { 'no-raw-color': noRawColor } } },
    rules: { 'local/no-raw-color': 'warn' },
  },
])
