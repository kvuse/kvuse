<template>
  <div class="guid-content">
    <div class="bg-purple mt10 mr10">
      <span>mt10 上边距10px：margin-top:10px</span><br>
      <span>mr10 右边距10px：margin-right:10px</span>
    </div>
    <div class="bg-purple mb10 ml10">
      <span>mb10 下边距10px：margin-bottom:10px</span><br>
      <span>ml10 左边距10px：margin-left:10px</span>
    </div>
  </div>
  <div class="guid-content">
    <div class="bg-purple mt20 mr20">
      <span>mt20 上边距20px：margin-top:20px</span><br>
      <span>mr20 右边距20px：margin-right:20px</span>
    </div>
    <div class="bg-purple mb20 ml20">
      <span>mb20 下边距10px：margin-bottom:20px</span><br>
      <span>ml20 左边距10px：margin-left:20px</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guid-content {
  border: 1px solid #eaeefb;
  padding: 10px;
  border-radius: 4px;
  display: flex;

  .bg-purple,
  .bg-purple-light {
    padding: 10px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    line-height: 1.5;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .bg-purple {
    width: 350px;
    background-color: #d3dce6;
  }
}

.bg-row {
  background-color: #d3dce6;
  padding: 10px;
  border-radius: 4px;
}

.width-240 {
  width: 240px;
}
</style>
