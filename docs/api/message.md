# useMessage

ElMessage提示的方法，取消上次提示，防止重复多次提示

## Usage

```js
<script setup>
  import { useMessage } from '@kvuse/core';
  const { message, messageBox } = useMessage();

  message.error('错误提示');
  message.success('成功提示');
  message.warning('警告提示');

  // messageBox
  messageBox.confirm({ msg: '是否确认删除?' }).then(() => {
    message.success('删除成功');
  });

  messageBox.alert({ msg: '提示信息！' }, () => {
    message.error('错误提示')
  });
</script>
```
