// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/max-attributes-per-line": [2, {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
