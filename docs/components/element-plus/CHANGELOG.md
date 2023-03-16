
# 1.2.15 (2023-03-16)

### Features

- 组件`table-v2`，添加`rowClassName`属性
- 组件`table-v2`，添加`setScrollTop`事件, 可设置滚动条到顶部的距离
- 组件`virtual-list`，加载列表性能的优化

### Change

- 组件`virtual-list`，修改`props`中的`rowClass`为`rowClassName`

# 1.2.12 (2023-03-09)

### Add

- 添加`keyboard`指令，监听键盘事件
- 添加`button`指令，点击防抖

# 1.2.8 (2023-02-17)

### Add

- 添加`tableV2`组件，虚拟列表

# 1.2.7 (2023-02-17)

### Add

- 添加`collapse-button`组件，折叠按钮

# 1.2.5 (2023-02-16)

### Bug Fixes

- 修复`VirtualList`组件，异步添加数据问题
- 修复一些已知问题

# 1.2.4 (2023-02-14)

### Add

- 新增`auto-counter`组件，数字动效
- 新增`VirtualList`组件，虚拟列表

# 1.2.3 (2022-12-07)

### Add

- `number-keyboard`组件，添加`startZero`属性

# 1.2.2 (2022-12-06)

### Bug Fixes

- 修复组件引入出现`resolveComponent can only be used in render() or setup()`报错问题

# 1.2.0 (2022-12-05)

### Bug Fixes

- 修复分页`change`事件问题
- 修复一些已知问题
​

### Add

- 新增`number-keyboard`组件

### Features

### Change

- 样式引入路径的修改：
`import '@kvuse/components/lib/style.css'`修改为`import '@kvuse/components/dist/index.css'`

- 文档路径的修改
- <https://kvuse.github.io/kvuse/components/element-plus/guide.html>
