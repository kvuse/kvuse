
# kvuse

vue3组件库
####  基于element-ui二次开发，根据项目需求，方便项目开发使用 

#### 安装
```
# Npm  
npm install kui-next
 
# Yarn  
yarn add kui-next 
```
#### 使用 按需引入

```js
import {
  KButton,
  KInput,
  KTable,
  KPage,
  KBatchTable,
  KDialog,
  KBreadcrumb,
  KTabs,
  KPicker,
} from 'kui-next';

export default {
  components: {
    KButton,
    KInput,
    KTable,
    KPage,
    KBatchTable,
    KDialog,
    KBreadcrumb,
    KTabs,
    KPicker,
  },
};
```
#### 全局components:

```
import { createApp } from 'vue';
import { KUI } from 'kui-next';
import 'kui-next/lib/style.css';
 
Vue.use(KUI)
```

### 使用
#### KButton
> 点击之后延时800ms,防止重复点击
```html
  <k-button type="primary">
    测试按钮
  </k-button>
```
#### KInput
> 默认只能输入数字，默认小数点后两位
### props
| 属性 | 类型 | 默认 | 使用说明 |
| ---- | ----| ---- | ---- |
|type | String | number | integer 只能输入整数 |
|point | Number | 2 |  小数点后几位 |

```js
<template>
  <k-input v-model="value" placeholder="输入内容" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

</script>
```
#### KTable
```js
<template>
  <k-table :table-column="tableColumn" :table-data="tableData">
    <template #set="{ row }">
      <k-button type="primary" plain @click="clickHandle(row)">
        详情
      </k-button>
    </template>
  </k-table>
</template>

<script setup>
import { ref } from 'vue';

// 如果不是动态可以不使用ref
const tableColumn = ref([
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '操作', custom: 'set', width: 150 },
]);

const tableData = ref([
  { date: '2022-05-20', name: '张三' },
  { date: '2022-05-21', name: '李四' },
]);

const clickHandle = (row) => {
  console.log('row: ', row);
};

</script>

<style>
</style>

```

### props
| 属性 | 类型 | 使用说明 |
| ---- | ----| ---- |
| tableColumn | Array | [{ lable:'日期', prop: 'date'}] |
| tableData | Array |  :tableData 或者 v-model:tableData="data" |
| currentPage | Number |  v-model="current" |
| total | Number |  数据的总条数 |
| size | Number |  每页显示的条数 |

其他参数看element官网

### tableColumn参数说明
| Props | 说明 | 类型 |
| ---- | ----| ---- |
| custom | 自定义内容插槽 | string |
| header | 自定义表头插槽 | string |
| width | 对应列的宽度 | string |
| minWidth | 对应列的最小宽度 | string |
| sortable | 对应列是否可以排序 | boolean |
| fixed | 列是否固定在左侧`left`或者右侧`right`， true 表示固定在左侧  | string / boolean |


### event

| 事件 | 说明 | 回调参数 |
| ---- | ----| ---- |
|  current-change | 当用户切换分页的触发该事件 | currengPage |
|  sort-change | 点击排序触发 | { prop, order, currentPage, column } |

#### kPage
```js
<template>
  <k-page v-model="currentPage" :total="100" @current-change="currentChange" />
</template>

<script setup>
import { ref } from 'vue';

const currentPage = ref(1);

const currentChange = (value) => {
  console.log('当前页数: ', value);
};

</script>

<style>
</style>

```
### props
| 属性 | 类型 | 使用说明 |
| ---- | ----| ---- |
| currentPage | Number |  v-model="current" |
| total | Number |  数据的总条数 |
| size | Number | v-model:page="current" 每页显示的条数 |
| showSize | Boolean |  是否显示切换每页的条数 |

### event

| 事件 | 说明 | 回调参数 |
| ---- | ----| ---- |
|  current-change | 当用户切换分页的触发该事件 | currengPage |
|  size-change | 切换条数触发改事件 | size |

#### KBatchTable
```js
<template>
  <k-batch-table :table-column="tableColumn" :table-data="tableData" key-id="id" v-model="multipleSelection">
    <template #set="{ row }">
      <k-button type="primary" plain @click="clickHandle(row)">
        详情
      </k-button>
    </template>
  </k-batch-table>
</template>

<script setup>
import { ref } from 'vue';

// 如果不是动态可以不使用ref
const tableColumn = ref([
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '操作', custom: 'set', width: 150 },
]);

const tableData = ref([
  { date: '2022-05-20', name: '张三', id: 1 },
  { date: '2022-05-21', name: '李四', id: 2 },
]);

const multipleSelection = ref([]);
const clickHandle = (row) => {
  console.log('row: ', row);
};

</script>

<style>
</style>

```
## batchTable组件

### props
| 属性 | 类型 | 使用说明 |
| ---- | ----| ---- |
| tableColumn | Array | [{ lable:'日期', prop: 'date'}] |
| tableData | Array |  :tableData 或者 v-model:tableData="data" |
| page | Number |  v-model:page="current" |
| size | Number |  每页显示的条数 |
| keyId | String |  设置选择的唯一值，默认id |
| model-value / v-model | Array |  选择的数组 |
| selectList | Array |  已选择的列表 |


其他参数看element官网

### tableColumn参数说明
| Props | 说明 | 类型 |
| ---- | ----| ---- |
| custom | 自定义内容插槽 | string |
| header | 自定义表头插槽 | string |
| width | 对应列的宽度 | string |
| minWidth | 对应列的最小宽度 | string |
| sortable | 对应列是否可以排序 | boolean |
| fixed | 列是否固定在左侧`left`或者右侧`right`， true 表示固定在左侧  | string / boolean |


### event

| 事件 | 说明 | 回调参数 |
| ---- | ----| ---- |
|  current-change | 当用户切换分页的触发该事件 | currengPage |
|  sort-change | 点击排序触发 | { prop, order, currentPage, column } |

#### KDialog
```js
<template>
  <K-dialog title="提示" v-model="visible" />
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(true);
</script>
```

### props
| 属性 | 类型 | 使用说明 |
| ---- | ----| ---- |
| showFooter | Boolean | 是否显示footer,默认false |

### event

| 事件 | 说明 | 回调参数 |
| ---- | ----| ---- |
| confirm | 当用户点击确认触发该事件 |  |
|  open | 打开对话框的时候触发 |  |
|  close | 关闭对话框的时候触发 |  |

#### slots 

| 插槽名 | 说明 | 插槽作用域 |
| ---- | ----| ---- |
| footer | footer内容 |  |

#### KTabs
> **首先要配置路由，name值要和路由名一致，切换路由自动跳转，刷新默认当前路由**
> 
> **如果没有配置路由，请使用elmentPlus tabs**
```js
<template>
  <k-tabs :tabs-list="tabsList" @tab-click="tabClick" />
</template>

<script setup>
import { ref } from 'vue';

const tabsList = ref([
  { label: '全部', name: 'all' },
  { label: '正常', name: 'normal' },
  { label: '已拉黑', name: 'block' },
]);
const tabClick = (name) => {
  console.log('name: ', name);
};
</script>

```
### props
| 属性 | 类型 | 使用说明 |
| ---- | ----| ---- |
| tabsList | Array |  |
| type | String | 类型 |

### event

| 事件 | 说明 | 回调参数 |
| ---- | ----| ---- |
| tab-click | 当用户点击确认触发该事件 |  |
|  change | 路由改变的触发 |  |

#### slots 

| 插槽名 | 说明 | 插槽作用域 |
| ---- | ----| ---- |
| - | 右侧的内容 |  |

#### KPicker

### props
| 属性 | 类型 | 使用说明 |
| ---- | ----| ---- |
| modelValue | Array | 勾选的列表 |
| tableColumn | Array | [{ lable:'日期', prop: 'date'}] |
| tableData | Array |  :tableData 或者 v-model:tableData="data" |
| currentPage | Number |  v-model="current" |
| selectList | Array |  已选择的列表 |
| keyId | String |  设置选择的唯一值，默认id |
| keyName | String |  设置选择的名字参数，默认pName |

其他参数看element官网

### tableColumn参数说明
| Props | 说明 | 类型 |
| ---- | ----| ---- |
| custom | 自定义插槽 | string |
| width | 对应列的宽度 | string |
| minWidth | 对应列的最小宽度 | string |
| sortable | 对应列是否可以排序 | boolean |


### event


