module.exports = {
    root: true,
    env: {
        node: true,
        es2020: true,
        mocha: true,
    },
    extends: ['standard'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        'max-len': ['error', { code: 326 }],
        'comma-dangle': 0,
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
    },
}
