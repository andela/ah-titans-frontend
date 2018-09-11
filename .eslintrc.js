module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // enable additional rules
    "indent": [2, "tab"],
    "no-tabs": 0,
    'max-len': ['error', 200],
    'react/forbid-prop-types': ['error', {'forbid': []}],
    'jsx-ally/href-no-hash': 'off',
    'jsx-ally/label-has-for': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'react/require-default-props': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prefer-stateless-function': 'off',
    'linebreak-style': ['error', 'unix'],
    "prefer-destructuring": ["error", {"object": true, "array": false}],

    quotes: ['error', 'single'],
    semi: ['error', 'always'],

    // override default options for rules from base configurations
    'no-cond-assign': ['error', 'always'],

    // disable rules from base configurations
    'no-console': 'off',
  },
  globals: {
    fetch: true,
    localStorage: true,
    describe: true,
    it: true,
    expect: true,
  },
};
