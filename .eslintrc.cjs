/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': 0, //禁止出现未使用过的变量
    '@typescript-eslint/no-unused-vars': 0,
    'vue/multi-word-component-names': 0,
    'vue/require-v-for-key': 0
  }
};
