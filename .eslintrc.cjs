// module.exports = {
//     env: {
//       browser: true,
//       es2017: true,
//     },
//     extends: ['eslint:recommended', 'plugin:prettier/recommended'],
//     parserOptions: {
//       ecmaVersion: 12,
//       sourceType: 'module',
//     },
//     plugins: ['svelte3'],
//     overrides: [
//       {
//         files: ['**/*.svelte'],
//         processor: 'svelte3/svelte3',
//       },
//     ],
//     rules: {},
//   };
  module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: ['*.cjs'],
    overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
    settings: {
      'svelte3/typescript': () => require('typescript')
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2020
    },
    env: {
      browser: true,
      es2017: true,
      node: true
    }
  };