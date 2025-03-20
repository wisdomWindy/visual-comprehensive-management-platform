<template>
 <div class="chart-box">
  <div class="left-chart">
    <div>4332</div>
  </div>
   <div class="right-chart">
    <div class="data-list">
      <div class="data-item">
        <div class="data-item-title">
          金融数据名称总价值
        </div>
        <div class="data-item-value">
         <span>1,234</span>万亿
        </div>
      </div>
      <div class="data-item">
        <div class="data-item-title">
          金融数据名称总价值
        </div>
        <div class="data-item-value">
         <span>1,234</span>万亿
        </div>
      </div>
      <div class="data-item">
        <div class="data-item-title">
          金融数据名称总价值
        </div>
        <div class="data-item-value">
         <span>1,234</span>万亿
        </div>
      </div>
      <div class="data-item">
        <div class="data-item-title">
          金融数据名称总价值
        </div>
        <div class="data-item-value">
         <span>1,234</span>万亿
        </div>
      </div>

    </div>
   </div>
 </div>
</template>

<script setup>
</script>

<style scoped>
 .chart-box{
  width:100%;
  height:100%;
  display:flex;
 }
 .right-chart,
 .left-chart{
  width:50%;
 }
 .left-chart{
  display:flex;
  width:110px;
  height:110px;
  margin:0 20px;
  align-items:center;
  justify-content:center;
  background:url('/imgs/demo9/circle_bg.png') no-repeat 0% 0%/100% 100%;
 }
 .left-chart{
  color:#DAF4FF;
 }
 .left-chart div:first-child{
  font-size:30px;
  font-weight:bold;
 }
 .data-item{
  color:#DAF4FF;
  font-size:12px;
  margin-bottom:10px;
 }
 .data-item-value{
  text-indent:10px;
 }
 .data-item-title{
  display:flex;
  align-items:center;
 }
 .data-item-title::before{
  content:'';
  display:block;
  width:10px;
  height:10px;
 }
 .data-item:nth-child(1) .data-item-title::before{
  background:#168DD8;
 }
  .data-item:nth-child(2) .data-item-title::before{
  background:#45B43C;
 }
  .data-item:nth-child(3) .data-item-title::before{
  background:#F38322;
 }
  .data-item:nth-child(4) .data-item-title::before{
  background:#1FCEF0;
 }
</style>