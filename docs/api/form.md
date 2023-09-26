# useForm

:::tip
**elForm表单验证，重置方法**
> 默认ref="ruleFormRef"，如果自定义方法中传值（你设置的ref）
:::

## Usage

```js
  import { useForm } from '@kvuse/core';
  const { ruleFormRef, submitForm, resetForm } = useForm();

  const submitHandler = async () => {
    const result = await submitForm();
    console.log('result: ', result);
  };

  const resetFormHandler = () => {
    resetForm();
  };

```
