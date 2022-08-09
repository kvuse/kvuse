<template>
  <div class="mb10">
    单轴方式：
  </div>
  <div>
    <div class="mb10">
      flex：flex
    </div>
    <ul class="guid-content flex">
      <li class="bg-purple">
        content1
      </li>
      <li class="bg-purple">
        content2
      </li>
      <li class="bg-purple">
        content3
      </li>
      <li class="bg-purple">
        content4
      </li>
    </ul>
  </div>
  <div>
    <div class="mb10 mt10">
      超出换行：flex-warp
    </div>
    <ul class="guid-content flex-wrap">
      <li class="bg-purple">
        content1
      </li>
      <li class="bg-purple">
        content2
      </li>
      <li class="bg-purple">
        content3
      </li>
      <li class="bg-purple">
        content4
      </li>
    </ul>
  </div>
  <div>
    <div class="mb10 mt10">
      左右居中：flex-justify-center
    </div>
    <div class="flex-justify-center flex1 bg-row">
      左右
    </div>
  </div>
  <div class="mt10">
    <div class="mb10">
      上下居中：flex-align-center
    </div>
    <div class="flex-align-center flex1 bg-row">
      上下
    </div>
  </div>
  <div class="mt10">
    <div class="mb10">
      左右上下居中：flex-center
    </div>
    <div class="flex-center flex1 bg-row">
      上下左右
    </div>
  </div>
  <div class="mt10">
    <div class="mb10">
      两侧的间隔相等：flex-around
    </div>
    <ul class="guid-content flex-around">
      <li class="bg-purple flex-center">
        左右
      </li>
      <li class="bg-purple flex-center">
        上下
      </li>
    </ul>
  </div>
  <div class="mt10">
    <div class="mb10">
      两端对齐，项目之间的间隔都相等: flex-between
    </div>
    <ul class="guid-content flex-between">
      <li class="bg-purple flex-center">
        左右
      </li>
      <li class="bg-purple flex-center">
        上下
      </li>
    </ul>
  </div>
  <div class="mb10 mt20">
    多轴方式：
  </div>
  <div>
    <div class="mb10">
      左右居中：flexs-justify-center
    </div>
    <ul class="guid-content flexs-justify-center">
      <li class="bg-purple flex-center">
        左右
      </li>
      <li class="bg-purple flex-center">
        上下
      </li>
    </ul>
  </div>
  <div>
    <div class="mb10 mt10">
      上下居中：flexs-align-center
    </div>
    <ul class="guid-content flexs-align-center">
      <li class="bg-purple flex-center">
        左右
      </li>
      <li class="bg-purple flex-center">
        上下
      </li>
    </ul>
  </div>
  <div>
    <div class="mb10 mt10">
      上下左右居中：flexs-center
    </div>
    <ul class="guid-content flexs-center">
      <li class="bg-purple flex-center">
        左右
      </li>
      <li class="bg-purple flex-center">
        上下
      </li>
    </ul>
  </div>
</template>

<script>
export default { };
</script>

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
