# useRequest

## Usage

```js

<script setup>
import { useRequest } from '@kvuse/core';

const { $api } = useRequest();

const getList = async () => {
  const result = await $api.get('接口地址','参数对象');
  console.log('result: ', result);
};

</script>
```

支持数据格式:

```json
{
  "code" : 0,
  "message" : "成功",
  "data" : {}
}
```

## 请求拦截

```js
<script setup>
import { useRequest } from '@kvuse/core';

const { $api } = useRequest({
  beforeRequest(config){
    config.headers.token = 'token';
    return config
  }
});

</script>
```

## 响应处理

```js
<script setup>
import { useRequest } from '@kvuse/core';

const { $api } = useRequest({
  beforeResponse(response){
    console.log(response);
  }
});

</script>
```

## 报错信息处理

:::tip
默认`message.error`提示报错信息
:::

```js
<script setup>
import { useRequest } from '@kvuse/core';

const { $api } = useRequest({
  errorHandler(error){
    console.log(error);
  }
});

</script>
```

## 对象模式

:::warning
**如果返参想用对象类型，请使用`$http`**

`responseHandler`方法，可以不写，默认是`code`为`[0,1001]`为成功, 如果其他可以设置
:::

```js

<script setup>
import { useRequest } from '@kvuse/core';

const { $http } = useRequest({
  responseHandler(response) {
    const { data, data: { code } } = response || {};
    if (code === 0) return data;
    // 执行报错处理
    return data;
  },
});

const getList = async () => {
  const { code, data, message } = await $http.get('接口地址','参数对象');
  console.log('code, data, message: ', code, data, message);
};

</script>
```

## 使用实例

:::warning
默认设置超时时间为10s
:::

```js
<script setup>
import { useRequest } from '@kvuse/core';
import axios from 'axios';


const instance = axios.create({
  timeout: 5000, // 超时时间
});


const { $api } = useRequest({
  instance,
});

const getList = async () => {
  const result = await $api.get('接口地址');
  console.log('result: ', result);
};

</script>
```

## 排除去重

:::warning
请求默认接口连续请求会去重处理，如果业务不去重，可以设置排除去重的list  

*排除接口添加请求方式，例如：`/order&get`*
:::

::: code-group

```js [全局添加]
<script setup>
import { useRequest } from '@kvuse/core';

/**
 * 添加排除去重的接口列表
 * @param {array} excludePeddings  例如：`/order&get`*
 */
const { $api } = useRequest({
  excludePeddings: ['/erp/order&post'],
});

const getList = async () => {
  const result = await $api.get('/erp/order', '参数对象');
  console.log('result: ', result);
};
</script>
```

```js [接口添加]
<script setup>
import { useRequest } from '@kvuse/core';
const { $api } = useRequest();

/**
 * 如果你的接口不需要取消请求，可以添加该参数 { cancelable: false }
 */
const getList = async () => {
  const result = await $api.get('/erp/order', '参数对象', { cancelable: false });
  console.log('result: ', result);
};

</script>
```

:::

## 参数说明

<v-table type="event" :data="[
  { event :'instance', dec: 'axios实例，默认axios', callback: '-' },
  { event :'beforeRequest', dec: '请求拦截', callback: 'config' },
  { event :'beforeResponse', dec: '响应拦截', callback: 'response' },
  { event :'responseHandler', dec: '响应处理', callback: 'response' },
  { event :'errorResponse', dec: '响应报错处理', callback: 'error, config' },
  { event :'errorHandler', dec: '报错信息处理, 默认message.error提示报错信息', callback: 'error' },
  { event :'excludePeddings', dec: '不去重连续请求的接口列表 url&get，默认 [ ]', callback: '-' },
]" />
