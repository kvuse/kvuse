# VParams

##### 参数处理

## 基础使用

如果没有参数或者参数为空，默认显示"-"，返回：`value ?? '-'`

```vue
<template>
  <div v-params="text" />
</template>

<script setup>
import { vParams } from '@kvuse/directives';

const text = ref('test');
</script>
```

## 数字类型

如果修饰符`modifier`设置`number`，默认为0，返回：`value ?? 0`

```vue
<template>
  <div v-params.number="text" />
</template>

<script setup>
import { vParams } from '@kvuse/directives';

const text = ref(10);
</script>
```

## 金额类型

如果修饰符`modifier`设置`money`，默认为0，返回：￥`value ?? '0.00'`

```vue
<template>
  <!-- ￥1.88 -->
  <div v-params.money="text" />
</template>

<script setup>
import { vParams } from '@kvuse/directives';

const text = ref('1.88');
</script>
```

## modifier参数

| 名称        |      说明      |
| ------------- | :-----------: |
| number      | 数字类型，如果为空默认返回0 |
| money      | 金额类型，参数前面加￥，如果为空默认返回￥0.00 |
