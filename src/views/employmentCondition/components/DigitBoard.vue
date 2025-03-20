<template>
  <div class="digit-board">
    <div class="digit-hd">
      <div class="item">125811</div>
      <div class="item">100000</div>
    </div>
    <div class="digit-bd">
      <div class="item">前端需求人数</div>
      <div class="item">市场供应人数</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.digit-board {
  width: 100%;
  height: 100px;
  padding: 10px;
  text-align: center;
}
.digit-hd {
  height: 80%;
  display: flex;
  align-items: center;
}
.digit-bd {
  height: 20%;
  display: flex;
  align-items: center;
}
div.item{
  flex:1;
}
div.item:nth-child(1) {
  position: relative;
}
div.item:nth-child(1)::after {
  content: '';
  width: 1px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 100%;
  background: #fff;
  transform: translateY(-50%);
}
</style>
