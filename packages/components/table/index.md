## table组件

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

