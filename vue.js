const rules = require('./rules');

module.exports = {
  "root": true,

  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },

  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },

  "rules": Object.assign({}, rules, {
    "vue/html-indent": [
      "warn",
      2,
      {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "ignores": []
      }
    ],
    "vue/script-indent": [
      "warn",
      2,
      {
        "switchCase": 1,
        "baseIndent": 1,
        "ignores": ["ConditionalExpression"]
      }
    ]
  }),

  "overrides": [
    {
      "files": [
        "*.vue"
      ],
      "rules": {
        "indent": "off"
      }
    },
    {
      "files": [
        "*.js",
        "*.jsx",
      ],
      "rules": {
        "vue/script-indent": "off"
      }
    }
  ]
};
