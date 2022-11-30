module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: ['@bothrs/eslint-config-typescript','@bothrs/eslint-config-react'],
    // Add parserOptions when using Typescript
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    // Place rule exceptions here
    rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
    },
}