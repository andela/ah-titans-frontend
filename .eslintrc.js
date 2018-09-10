module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    
    // enable additional rules
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
    indent: ['error', 2],

    // override default options for rules from base configurations
    'comma-dangle': ['error', 'always'],
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
