# 更新日志

## 1.4.2 (2023-09-11)

### Change

- [`input`](../input.md)输入框组件，默认最大值`999999.99`

## 1.4.1 (2023-09-07)

### Change

- 重构[`Picker`](../picker.md)选择器组件，修复一些体验问题
- [`Pagination`](../pagination#切换页码)组件，切换页码的优化
- [`tableV2`](../table-v2#tablev2-slots)组件，添加`empty`插槽

### Bug Fixes

- 修复`breadcrumb`组件跳转的优化
- 修复一些已知问题

## 1.3.4 (2023-06-08)

### Change

- [`tableV2`组件](../table-v2#table-属性)，添加`show-summary`属性，显示合计行功能，以及可以自定义显示合计功能
- [`tableV2`组件](../table-v2#tablev2-column-插槽)，添加`footer`插槽

### Features

- [`CardList`虚拟列表组件](../card-list)，下拉的优化
- [`CollapseButton`组件](../collapse-button#按钮位置)，按钮位置的优化

## 1.3.0 (2023-05-18)

### Change

- [`Dialog`组件](../dialog#dialog-属性.md)，添加`confirmDisabled`属性，控制确认按钮是否点击
- [`table`组件](../table#table-属性)，添加`size`属性，可控制每页显示的条数

## 1.2.22 (2023-03-31)

### Add

- 添加[`KCardList`组件](../card-list.md)，自适应卡片组件

### Change

- 组件`picker`，[添加`right-header`以及`right`插槽](/element-plus/picker#picker-slots)

### Bug Fixes

- 修复`VirtualList`组件，优化异步添加数据
- 修复`tableV2`组件，显示滚动条问题
- 修复一些已知问题

## 1.2.15 (2023-03-16)

### Features

- 组件`table-v2`，添加`rowClassName`属性
- 组件`table-v2`，添加`setScrollTop`事件, 可设置滚动条到顶部的距离
- 组件`virtual-list`，加载列表性能的优化

### Change

- 组件`virtual-list`，修改`props`中的`rowClass`为`rowClassName`

## 1.2.12 (2023-03-09)

### Add

- 添加[`keyboard`指令](../directives/keyboard.md)，监听键盘事件
- 添加[`button`指令](../directives/button.md)，点击防抖

## 1.2.8 (2023-02-17)

### Add

- 添加[`tableV2`组件](../table-v2.md)，虚拟列表

## 1.2.7 (2023-02-17)

### Add

- 添加[`collapse-button`组件](../collapse-button.md)，折叠按钮

## 1.2.5 (2023-02-16)

### Bug Fixes

- 修复`VirtualList`组件，异步添加数据问题
- 修复一些已知问题

## 1.2.4 (2023-02-14)

### Add

- 新增[`auto-counter`组件](../auto-counter.md)，数字动效
- 新增[`VirtualList`组件](../virtual-list.md)，虚拟列表

## 1.2.3 (2022-12-07)

### Add

- `number-keyboard`组件，添加`startZero`属性

## 1.2.2 (2022-12-06)

### Bug Fixes

- 修复组件引入出现`resolveComponent can only be used in render() or setup()`报错问题

## 1.2.0 (2022-12-05)

### Bug Fixes

- 修复分页`change`事件问题
- 修复一些已知问题
​

### Add

- 新增[`number-keyboard`组件](../number-keyboard.md)

### Features

### Change

- 样式引入路径的修改：
`import '@kvuse/components/lib/style.css'`修改为`import '@kvuse/components/dist/index.css'`

- 文档路径的修改
- <https://kvuse.github.io/kvuse/components/element-plus/guide.html>
