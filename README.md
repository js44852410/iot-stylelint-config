# iot-stylelint-config
IoT stylelint 配置


1、 引入：

```
npm i -D stylelint stylelint-config-rational-order stylelint-config-rational-order-fix stylelint-config-sass-guidelines stylelint-config-standard stylelint-order stylelint-processor-html stylelint-scss stylelint-webpack-plugin
npm i -D iot-stylelint-config
```
vue3移动端项目需安装依赖：
```
 "postcss": "^8.4.4",
    "postcss-pxtorem": "5.1.1",
    "postcss-scss": "^4.0.2",
```

2、.stylelintrc 配置

```
 {
  "processors": ["stylelint-processor-html"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-config-sass-guidelines",
    "iot-stylelint-config"
  ],
  "plugins": ["stylelint-scss", "stylelint-config-rational-order/plugin"],
  "rules": {
  }
}
```

3、vue.config.js 添加配置

```
configureWebpack: { // webpack的相关配置在这里
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{html,vue}'],
        fix: false,
        cache: true,
        emitErrors: true,
        failOnError: false,
      })
    ]
}
```
