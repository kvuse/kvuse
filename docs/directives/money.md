# Money

## 金额处理

默认小数点后两位

<demo src="directives-money/basic">

<<< @/example/element-plus/directives-money/basic.vue
</demo>

## 小数点位数

设置`point`可以设置小数点位数 例如：`v-model:point="4"`

<demo src="directives-money/point">

<<< @/example/element-plus/directives-money/point.vue
</demo>

## 数据更新

:::warning
如果有更新数据，谨慎使用，数据更新不会自动更新数据。

如果使用可以使用`v-money:value="value"`
:::

<demo src="directives-money/update">

<<< @/example/element-plus/directives-money/update.vue
</demo>
