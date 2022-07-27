# useFilter

## Usage

```js
<script setup>
  import { useFilters } from '@kvuse/core';
  const { moneyPoint, moneyType, dataType, paramsType, rounding } = useFilters();
</script>
```

## 浮点数据处理

```js
import { useFilters } from '@kvuse/core';

const { moneyPoint } = useFilters();
console.log(moneyPoint(1.22 * 0.8)); // 0.98
```

## 金额处理

```js
import { useFilters } from '@kvuse/core';

const { moneyType } = useFilters();
console.log(moneyType(1.22 * 0.8)); // ￥0.98
```

## 数字处理

```js
import { useFilters } from '@kvuse/core';

const { dataType } = useFilters();
console.log(dataType(1.22 * 0.8)); // 0.976
console.log(dataType(null)); // 0
```

## 参数处理

```js
import { useFilters } from '@kvuse/core';

const { paramsType } = useFilters();
console.log(paramsType(1.22 * 0.8)); // 0.976
console.log(paramsType(null)); // -
```

## 小数点位数

可使用第二个参数，输入`1-9`数字，限制小时点位数, 默认小时后两位

```js
import { useFilters } from '@kvuse/core';

const { rounding } = useFilters();
console.log(rounding(1.22 * 0.8)); // 0.98
console.log(rounding(6.888)); // 6.89
console.log(rounding(6.88888, 3)); // 6.889
```
