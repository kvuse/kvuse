``` json
{
  "main": "./dist/index.umd.js",
  "module": "./dist/index.es.js",
  "exports": {
    ".": {
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.js"
    },
    "./dist/index.css": {
      "import": "./dist/index.css",
      "require": "./dist/index.css"
    }
  },
}
```
