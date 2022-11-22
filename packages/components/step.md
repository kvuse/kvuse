```json
{
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
}
```
