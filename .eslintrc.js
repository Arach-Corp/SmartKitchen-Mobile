module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-native/all',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/style-prop-object': 'off',
    'no-use-before-define': 'off',
    'react/prefer-stateless-function': 'off',
    'max-len': 'off',
    'no-nested-ternary': 'off',
    'default-case': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'off',
    'import/prefer-default-export': 'off',
    'react-native/no-raw-text': 'off',
    'prop-types': 'off',
  },
};
