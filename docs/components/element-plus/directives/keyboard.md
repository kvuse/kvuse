
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
