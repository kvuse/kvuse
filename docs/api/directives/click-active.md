# OnClickActive

##### 点击元素选中，可设置选中的状态

## 基础使用

 默认选中第一个

<demo md src="click-active/basic" dir="api">

<<< @/example/api/click-active/basic.vue

</demo>

## 设置默认

 可设置`defaultIndex`值设置默认选中，必须设置`className`

<demo md src="click-active/default" dir="api">

<<< @/example/api/click-active/default.vue

</demo>

## 参数说明

<v-table type="dec" :data="[
  { name :'activeName', dec: '选中的状态的class名' },
  { name :'defaultIndex', dec: '设置默认选中的下标，className必填' },
  { name :'className', dec: '当前元素的class名，可选' },
]" />
