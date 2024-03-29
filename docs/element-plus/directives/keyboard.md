
# keyboard 监听键盘

:::tip
设置`v-keyboard`,可监听键盘事件，进行事件处理
:::

## 基础使用

<demo src="directives-keyboard/basic">

<<< @/example/element-plus/directives-keyboard/basic.vue
</demo>

## 单键监听

<demo src="directives-keyboard/single">

<<< @/example/element-plus/directives-keyboard/single.vue
</demo>

## 多键监听

<demo src="directives-keyboard/more">

<<< @/example/element-plus/directives-keyboard/more.vue
</demo>

## 组合键监听

:::tip
组合键不受焦点限制
:::

<demo src="directives-keyboard/combination">

<<< @/example/element-plus/directives-keyboard/combination.vue
</demo>

## 焦点下可监听

:::warning
设置`v-keyboard`,单键监听在输入框焦点下或者有elementUI弹框提示下不执行，如果执行，可设置修饰符focus,dialog参数
:::

设置`focus`修饰符,可焦点下监听键盘事件

<demo src="directives-keyboard/focus">

<<< @/example/element-plus/directives-keyboard/focus.vue
</demo>

## 弹框下可监听

设置`dialog`修饰符,可弹框下监听键盘事件

<demo src="directives-keyboard/dialog">

<<< @/example/element-plus/directives-keyboard/dialog.vue
</demo>

## 长监听

:::warning
设置`long`修饰符，处理组件缓存(`keepAlive`)状态下，切换组件监听不到问题
:::

<demo src="directives-keyboard/long">

<<< @/example/element-plus/directives-keyboard/long.vue
</demo>

## 参数说明

![参数说明](./keyboard.png)

## 修饰符说明

<v-table type="dec" :data="[
  { name :'focus', dec: '焦状态下可监听' },
  { name :'dialog', dec: '弹框状态下可监听' },
  { name :'long', dec: '长监听，keep-alive下使用' },
]" />
