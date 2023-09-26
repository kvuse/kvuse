# useUrlSearchParams

获取url参数

## 获取Url参数

:::tip
`useUrlSearchParams` 获取url参数, 默认`window.location.href`
:::

```js
import { useUrlSearchParams } from '@kvuse/core';

const parmams1 = useUrlSearchParams('https://www.example.com/?param1=value1&param2=value2&param3=value3')
console.log('parmams1: ', parmams1); 
// {param1: 'value1', param2: 'value2', param3: 'value3'}

const params2 = useUrlSearchParams('https://www.example.com/?param1=value1')
console.log('params2: ', params2);
// {param1: 'value1'}

const params3 = useUrlSearchParams('https://www.example.com/')
console.log('params3: ', params3);
// {}

// 当前链接的参数
const params4 = useUrlSearchParams()
console.log('params4: ', params4);

```
