module.exports = {
  extends: "stylelint-config-standard-scss",
  "customSyntax": "postcss-html",
  rules: {
    "selector-max-id": 2,
    "at-rule-no-unknown": [true, { ignoreAtRules: ["include", "mixin"] }],
    "selector-max-compound-selectors": 4, // 允许伪类嵌套4层
    "max-nesting-depth": [
      4,
      {
        ignore: ["pseudo-classes", "blockless-at-rules"]
      }
    ],
    "selector-class-pattern": null, // 允许下划线以及其他类型 __
    "declaration-property-value-disallowed-list": {
      "unprefixed-property-name": ["/^border/", "^color",] //允许样式覆盖
    },
    "no-empty-source": null, // 可以空内容
    "scss/double-slash-comment-whitespace-inside": null, // 注释问题
    "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["deep"] }] //忽略未知的伪类选择器 
  },
  "overrides": [
    {
      "files": ["*.scss", "**/*.scss","*.css", "**/*.css"],
      "customSyntax": "postcss-scss"
    },
  ]
};
