module.exports = {
  "processors": ["stylelint-processor-html"],
  "extends": ["stylelint-config-standard", "stylelint-config-rational-order","stylelint-config-sass-guidelines"],
  "plugins": ["stylelint-scss", "stylelint-config-rational-order/plugin"],
  "rules": {
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "font-weight-notation": "numeric",
    "no-empty-first-line": null,
    "indentation": 2,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always-single-line",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "value-list-comma-space-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "selector-list-comma-newline-after": "always",
    "declaration-block-single-line-max-declarations": 1,
    "max-line-length": 120,
    "number-leading-zero": "always",
    "selector-attribute-quotes": "always",
    "selector-max-compound-selectors": 5,
    "max-nesting-depth": 5,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "no-invalid-double-slash-comments": true,
    "comment-whitespace-inside": "always",
    "comment-empty-line-before": "always",
    "selector-class-pattern": ["^([a-z][a-z0-9]*)((-|(__))+[a-z0-9]+)*$", {
      "message": "Expected class selector to be kebab-case"
    }],

    "order/properties-alphabetical-order": null,

    "no-empty-source": null,
    "number-no-trailing-zeros": true,
    "length-zero-no-unit": true,
    "shorthand-property-no-redundant-values": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-semicolon-newline-after": "always",
    "block-closing-brace-newline-after": "always",
    "media-feature-colon-space-after": "always",
    "media-feature-range-operator-space-after": "always",
    "at-rule-name-space-after": "always",
    "no-eol-whitespace": true,
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["extend", "at-root", "debug", "warn", "error", "if", "else", "for", "each", "while", "mixin", "include", "content", "return", "function"]
    }],
    // 无需使用百分比数字
    "alpha-value-notation": null,
    // 可以使用颜色方法（rgba、rgb）
    "color-function-notation": null
  }
}
