module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
    'import/extensions': [2, { js: 'never' }],
    'import/no-extraneous-dependencies': 0,
  },
  globals: {},
};
