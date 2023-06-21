# usePage

## Usage

```js
<script setup>
  import { usePage } from '@kvuse/core';
  const { totalPage, totalRecord, currentPage, listData, getNowPage, setListAndPage, nullData } = usePage();

  const getResult = async () => {
    const result = await getApi();
    setListAndPage(result); // 设置totalPage和listData....

    // 如果获得数组是累加的话，可以添加第二个参数
    // setListAndPage(result, true); 
    // 返回的数组合并 listData.value = [...listData.value, ...result]
  }

</script>
```

## 参数说明

<v-table type="event" :data="[
  { event :'totalPage', dec: '列表分页总页数', callback: '-' },
  { event :'totalRecord', dec: '列表分页总条数', callback: '-' },
  { event :'currentPage', dec: '当前页数', callback: '-' },
  { event :'listData/tableData', dec: '当前分页数据列表', callback: '-' },
  { event :'isNullData', dec: '是否是空数据', callback: '-' },
  { event :'loading', dec: '接口请求参数，如果请求完成为false', callback: '-' },
  { event :'getNowPage', dec: '获取当前分页数据, 删除商品临界值计算, 删除判断是否跳转上一页', callback: '(delList) delList删除的商品列表(批量删除使用)' },
  { event :'setListAndPage', dec: '设置listData,pageTotal', callback: '如果单独设置list和totalPage请忽略' },
]" />
