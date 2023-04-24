# useFormatParams

格式化参数对象

:::tip
  常用于请求对象参数处理以及对象返参处理,可以过滤参数为空的情况
:::

## 参数处理

默认空值不返回

```js
import { useFormatParams } from '@kvuse/core'
const params = {
  name: 'Tyler Bennett',
  phone: '123-555-1234',
  email: '',
  address: '',
  state: 'NY',
  city: 'New York',
};
console.log(useFormatParams(params));

// console.log
// {
//   name: 'Tyler Bennett',
//   phone: '123-555-1234',
//   state: 'NY',
//   city: 'New York',
// };
```

## 自定义返参

```js
import { useFormatParams } from '@kvuse/core'
const params = {
  name: 'Tyler Bennett',
  phone: '123-555-1234',
  email: '',
  address: '',
  state: 'NY',
  city: 'New York',
};
const excludeList = ['name', 'city'];
console.log(useFormatParams(params, excludeList));

// console.log
// {
//   phone: '123-555-1234',
//   state: 'NY',
// };
```
