# usePage

分页组件的方法和参数

## Usage

```js
<script setup>
  import { usePage } from '@common/core';
  const { totalPage, totalRecord, currentPage, listData, getNowPage, setListAndPage, nullData } = usePage();

</script>
```

| 参数 | 说明 | 回调参数 |
| ---- | ----| ---- |
|  totalPage | 列表分页总页数 |  |
|  totalRecord | 列表分页总条数 |  |
|  currentPage | 当前页数 |  |
|  listData/tableData | 当前分页数据列表 |  |
|  isNullData | 是否是空数据  |  |
|  loading | 接口请求参数，如果请求完成为false  |  |
|  getNowPage | 获取当前分页数据, 删除商品临界值计算 | list: 默认listData/tableData |
|  setListAndPage | 设置listData,pageTotal  | 如果单独设置list和totalPage请忽略 |
