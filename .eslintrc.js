module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'all',
      }
    ],
    'vue/attribute-hyphenation': [
      'error',
      'never'
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/html-self-closing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/order-in-components': ['error', {
      // base order -> https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'middleware',
        'layout',
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'headBuilder',
        'head',
        'breadcrumb',
        'validate',
        'fetch',
        'asyncData',
        'beforeRouteEnter',
        'beforeRouteUpdate',
        'beforeRouteLeave',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}