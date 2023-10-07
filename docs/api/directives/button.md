# Button Click

## 基础使用

<demo src="click-button/b-basic" dir="api">

<<< @/example/api/click-button/b-basic.vue
</demo>

## 设置延迟时间

可通过设置`delay:1000ms`, 改变延迟时间

<demo src="click-button/b-delay" dir="api">

<<< @/example/api/click-button/b-delay.vue
</demo>

## 修改内容

可通过设置`content:'接口请求中'`, 改变按钮内容

<demo src="click-button/b-content" dir="api">

<<< @/example/api/click-button/b-content.vue
</demo>

## 点击一次

通过设置`once`, 按钮只可点击一次

<demo src="click-button/b-once" dir="api">

<<< @/example/api/click-button/b-once.vue
</demo>

## 接口请求

通过动态设置, 按钮显示加载中状态

> 默认：点击后文案请求中... 也可自定义设置`{ content: '接口请求中' }`

<demo src="click-button/b-request" dir="api">

<<< @/example/api/click-button/b-request.vue
</demo>
