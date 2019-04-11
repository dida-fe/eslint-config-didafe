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
      "error",
      2,
      {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true
      }
    ],
    "vue/script-indent": [
      "error",
      2,
      {
        "baseIndent": 1
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
    }
  ]
};