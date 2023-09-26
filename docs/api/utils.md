# useUtils

常用的工具函数

## API

- getFormatParams  处理参数默认值
- formatRadixPoint 格式化金额输入框小数点后几位
- setUrlParams 设置Url参数

## 处理参数默认值

```js
import { useUtils } from '@kvuse/core';

const { getFormatParams } = useUtils();

getFormatParams() // 默认为 0
getFormatParams(2) //  2
getFormatParams(null, '-')  // -

```

## 格式化金额输入框

:::tip
 `formatRadixPoint` 默认小数点后保留两位

 可设置第二个参数设置小数点位数
:::

<demo md src="utils/input-basic" dir="api">

<<< @/example/api/utils/input-basic.vue

</demo>

## 设置Url参数

:::tip
`setUrlParams` 设置url参数, 默认会去掉[undefined, null, '']

如果已经存在参数，请设个第二个参数
:::

```js
import { useUtils } from '@kvuse/core';

const { setUrlParams } = useUtils();

const params = {
  title: '测试',
  url: '/test',
  id: 11,
  name: ''
};
console.log(setUrlParams(params)); // ?title=测试&url=/test&id=11
console.log(setUrlParams(params, true)); // &title=测试&url=/test&id=11

```
