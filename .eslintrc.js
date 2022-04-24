module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es2021": true
  },
  'root': true,
  'ignorePatterns': ['.eslintrc.js'],
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'max-len': ['error', { 'code': 120 }],
    'arrow-parens': 'off',
    'radix': 'off',
    'no-unused-expression': 'off',
    'operator-linebreak': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'max-classes-per-file': 'off',
    'object-shorthand': ['error', 'always'],
    'no-underscore-dangle': 'off',
    'no-var': 'error',
    'no-unused-vars': 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'no-empty-pattern': 'off',
  }
}
