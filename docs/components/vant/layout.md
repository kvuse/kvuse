
# Layout 布局

:::tip
  总结一些常用的布局模式
:::

## 基础用法

> 常用的外边距设置  

## 字体颜色

<demo md src="layout/color">

<<< @/example/element-plus/layout/color.vue
</demo>

## 背景颜色

<demo md src="layout/background">

<<< @/example/element-plus/layout/background.vue
</demo>

## 使用边距

<demo md src="layout/margin">

<<< @/example/element-plus/layout/margin.vue
</demo>

## 鼠标类型

<demo md src="layout/mouse">

<<< @/example/element-plus/layout/mouse.vue
</demo>

## flex布局

<demo md src="layout/flex">

<<< @/example/element-plus/layout/flex.vue
</demo>

## 样式属性class

+ Font 字体

  |  class名  | 类型  | 大小  |
  |  :----:  | :----: | :----: |
  | font-12  | font-size | 12px |
  | font-14  | font-size | 12px |
  | font-16  | font-size | 12px |
  | font-18  | font-size | 12px |
  | font-20  | font-size | 12px |
  | font-22  | font-size | 12px |
  | font-24  | font-size | 12px |
  | font-28  | font-size | 12px |

+ Color 颜色

  |  class名   | 类型  | 颜色  |
  |  :----:  | :----: | :----: |
  | c-red  | 红色 | #f4364c |
  | c-blue  | 蓝色 | #409eff |
  | c-yellow | 黄色 | #ffb14d |
  | c-green  | 绿色 | #66bf4b |
  | c-gray  | 灰色 | #97a8be |
  | c-white  | 白色 | #ffffff |
  | color-33  | #333333 | #333333 |
  | color-66  | #666666 | #666666 |
  | color-99  | #999999 | #999999 |

+ BackgroundColor 背景颜色

  |  class名   | 类型  | 颜色  |
  |  :----  | :----: | :----: |
  | bg-red  | 红色 | #f4364c |
  | bg-blue  | 蓝色 | #409eff |
  | bg-yellow | 黄色 | #ffb14d |
  | bg-green  | 绿色 | #66bf4b |
  | bg-gray  | 灰色 | #97a8be |
  | bg-white  | 白色 | #ffffff |
  
+ margin 外边距

  |  class名   | 类型  | 大小  |
  |  :----:  | :----: | :----: |
  | mt5, mt10, mt15, mt20, mt25, mt30 | margin-top | 5px, 10px, 15px, 20px, 25px, 30px |
  | mt35, mt40, mt45, mt50, mt55, mt60  | margin-top | 35px, 40px, 45px, 50px, 55px, 60px  |
  | mr5, mr10, mr15, mr20, mr25, mt30  | margin-right | 5px, 10px, 15px, 20px, 25px, 30px |
  | mr35, mr40, mr45, mr50, mr55, mr60  | margin-right | 35px, 40px, 45px, 50px, 55px, 60px |
  | mb5, mb10, mb15, mb20, mb25, mb30 | margin-bottom | 5px, 10px, 15px, 20px, 25px, 30px |
  | mb35, mb40, mb45, mb50, mb55, mb60 | margin-bottom | 35px, 40px, 45px, 50px, 55px, 60px |
  | ml5, ml10, ml15, ml20, ml25, ml30 | margin-left | 5px, 10px, 15px, 20px, 25px, 30px |
  |ml35, ml40, ml45, ml50, ml55, ml60  | margin-left | 35px, 40px, 45px, 50px, 55px, 60px |

+ padding 内边距

  |  class名   | 类型  | 大小  |
  |  :----:  | :----: | :----: |
  | pt5, pt10, pt15, pt20, pt25, pt30  | padding-top | 5px, 10px, 15px, 20px, 25px, 30px|
  | pt35, pt40, pt45, pt50, pt55, pt60  | padding-top | 35px, 40px, 45px, 50px, 55px, 60px |
  | pr5, pr10, pr15, pr20, pr25, pr30  | padding-right | 5px, 10px, 15px, 20px, 25px, 30px|
  | pr35, pr40, pr45, pr50, pr55, pr60  | padding-right | 35px, 40px, 45px, 50px, 55px, 60px |
  | pb5, pb10, pb15, pb20, pb25, pb30  | padding-bottom | 5px, 10px, 15px, 20px, 25px, 30px|
  | pb35, pb40, pb45, pb50, pb55, pb60  | padding-bottom | 35px, 40px, 45px, 50px, 55px, 60px |
  | pl5, pl10, pl15, pl20, pl25, pl30 | padding-left | 5px, 10px, 15px, 20px, 25px, 30px|
  | pl35, pl40, pl45, pl50, pl55, pl60  | padding-left | 35px, 40px, 45px, 50px, 55px, 60px |

+ padding 其他内边距

  |  class名   | 类型  | 大小  |
  |  :----:  | :----: | :----: |
  | p5, p10, p15, p20, p25, p30  | padding | 5px, 10px, 15px, 20px, 25px, 30px|

+ Width 宽度

  |  class名  | 类型  | 大小  |
  |  :----:  | :----: | :----: |
  | width-60  | width | 60px |
  | width-80  | width | 80px |
  | width-100  | width | 100px |
  | width-120  | width | 120px |
  | width-140  | width | 140px |
  | width-160  | width | 160px |
  | width-180  | width | 180px |
  | width-200  | width | 200px |
  | width-220  | width | 220px |
  | width-240  | width | 240px |
  | width-260  | width | 260px |
  | width-280  | width | 280px |
  | width-300  | width | 300px |

+ Border 边框

  |  class名  | 类型  | 大小  |
  |  :----:  | :----: | :----: |
  | border-left  | border-left | 1px solid #d8dce5 |
  | border-right  | border-right | 1px solid #d8dce5 |
  | border-top  | border-top | 1px solid #d8dce5 |
  | border-bottom  | border-bottom | 1px solid #d8dce5 |
  | border-radius  | border-radius | 8px |

+ Text-decoration 文本修饰

  |  class名  | 类型  | 说明 |
  |  :----:  | :----: | :----: |
  | line-through  | text-decoration: line-through | 中划线 |
  | over-line  | text-decoration: overline | 上划线 |
  | under-line  | text-decoration: underline | 下划线 |

+ Cursor 鼠标样式

  |  class名  | 类型  | 说明  |
  |  :----:  | :----: | :----: |
  | pointer  | cursor: pointer | 光标手指指针 |
  | not-allowed  | cursor: not-allowed | 禁用样式 |

+ Overflow 文本超出

  |  class名  | 类型  | 说明  |
  |  :----  | :---- | :---- |
  | overflow  | overflow: hidden | 超出隐藏 |
  | overflow-y  | overflow-y: auto | 设置y轴: auto |
  | text-overflow |  | 超出显示... |

+ Text 文本
  
  |  class名  | 类型  | 说明  |
  |  :----  | :---- | :---- |
  | text-left  | text-align: left | 居左显示 |
  | text-right  | text-align: right | 居右显示 |
  | text-center | text-align: center | 居中显示 |
  | word-wrap | word-wrap: break-word | 文字中断换货显示 |

+ Flex
  
  |  class名  | 类型  | 说明  |
  |  :----  | :---- | :---- |
  | flex | display: flex | 设置flex |
  | flex-warp  | flex-wrap: wrap | 超出换行 |
  | flex-shrink | flex-shrink：0 | 比例不缩小  |
  | flex1 | flex：1 | 设置全屏  |
  | flex-center |  | 上下左右居中 |
  | flex-align-center |  | 左右居中 |
  | flex-justify-center |  | 上下居中 |
  | flex-around |  | 两侧的间隔相等 |
  | flex-between |  | 两端对齐，项目之间的间隔都相等 |
  | flex-column | flex-decoration: column| 设置flex方向: column |
  | flexs-center | | 多轴方式：上下左右居中 |
  | flexs-justify-center | | 多轴方式：左右居中 |
  | flexs-align-center | | 多轴方式：上下居中 |
