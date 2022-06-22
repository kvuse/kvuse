## picker组件

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


