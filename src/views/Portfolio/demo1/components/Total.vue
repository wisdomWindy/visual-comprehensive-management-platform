<template>
  <div class="container">
    <div class="data-item">
      <div class="title">数据中心</div>
      <div><span class="value">204</span><span class="unit">个</span></div>
    </div>
    <div class="data-item">
      <div class="title">主机</div>
      <div><span class="value">109</span><span class="unit">台</span></div>
    </div>
    <div class="data-item">
      <div class="title">CPU</div>
      <div><span class="value">1600</span><span class="unit">核</span></div>
    </div>
    <div class="data-item">
      <div class="title">内存</div>
      <div><span class="value">29</span><span class="unit">GB</span></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  background-image: linear-gradient(to bottom, #227FFD 0%, #006CFF 100%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 109px;
  text-align: center;
  border:1px solid #006CFF;
}
.title,
.unit {
  color: #fff;
  font-size: 12px;
  margin-bottom: 10px;
}
.value {
  color: #3dddff;
  font-size: 19px;
}
</style>
