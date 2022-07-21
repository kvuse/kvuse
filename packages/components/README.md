
# kui-next

vue3组件库

#### 基于element-ui二次开发，根据项目需求，方便项目开发使用

```js
"main": "./lib/k.umd.js",
  "module": "./lib/k.es.js",
  "exports": {
    ".": {
      "import": "./lib/k.es.js",
      "require": "./lib/k.umd.js"
    },
    "./lib/style.css": {
      "import": "./lib/style.css",
      "require": "./lib/style.css"
    }
  },
```
