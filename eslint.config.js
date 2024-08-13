// import js from '@eslint/js'
// import globals from 'globals'
// import react from 'eslint-plugin-react'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'

// export default [
//   {
//     files: ['**/*.{js,jsx}'],
//     ignores: ['dist'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     settings: { react: { version: '18.3' } },
//     plugins: {
//       react,
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...js.configs.recommended.rules,
//       ...react.configs.recommended.rules,
//       ...react.configs['jsx-runtime'].rules,
//       ...reactHooks.configs.recommended.rules,
//       'react/jsx-no-target-blank': 'off',
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//       "react/prop-types":'0',
//     },
//   },
// ]

// Import ESLint's default JavaScript configuration.
import js from '@eslint/js'

// Import a collection of global variables (e.g., window, document) that ESLint should recognize.
import globals from 'globals'

// Import ESLint's plugin for React, which includes rules and configurations specifically for React applications.
import react from 'eslint-plugin-react'

// Import the React Hooks plugin, enforcing rules for using React Hooks.
import reactHooks from 'eslint-plugin-react-hooks'

// Import a plugin for handling the React Refresh tool, which enables fast-refresh functionality during development.
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    // This configuration applies to all JavaScript (.js) and JSX (.jsx) files in the project.
    files: ['**/*.{js,jsx}'],

    // Excludes files in the dist directory from linting.
    ignores: ['dist'],

    // Configures language-related settings.
    languageOptions: {
      // Specifies ECMAScript 2020 as the base language version.
      ecmaVersion: 2020,

      // Adds browser global variables (like window, document) to the ESLint environment.
      globals: globals.browser,

      // Further configures how the code should be parsed.
      parserOptions: {
        // Sets the ECMAScript version to the latest.
        ecmaVersion: 'latest',

        // Enables support for JSX syntax.
        ecmaFeatures: { jsx: true },

        // Indicates that the code uses ECMAScript modules.
        sourceType: 'module',
      },
    },

    // Provides additional settings specific to React.
    settings: {
      // Specifies the React version being used, helping ESLint apply the correct rules for that version.
      react: { version: '18.3' },
    },

    // Lists the plugins to use with ESLint.
    plugins: {
      // Adds React-specific linting rules.
      react,

      // Adds linting rules for React Hooks.
      'react-hooks': reactHooks,

      // Adds rules for React Refresh, ensuring best practices for hot-reloading.
      'react-refresh': reactRefresh,
    },

    // Specifies the ESLint rules to enforce.
    rules: {
      // Includes ESLint's recommended rules for JavaScript.
      ...js.configs.recommended.rules,

      // Includes ESLint's recommended rules for React.
      ...react.configs.recommended.rules,

      // Includes rules specific to React's JSX runtime.
      ...react.configs['jsx-runtime'].rules,

      // Includes recommended rules for React Hooks.
      ...reactHooks.configs.recommended.rules,

      // Disables the rule that warns against using target="_blank" in links without rel="noopener noreferrer".
      'react/jsx-no-target-blank': 'off',

      // Warns (instead of throwing an error) if non-components are exported, but allows constant exports.
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Disables the rule requiring prop-types in React components.
      'react/prop-types': '0',
    },
  },
]
