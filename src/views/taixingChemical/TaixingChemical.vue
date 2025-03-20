<template>
  <div class="container">
    <div class="header flex">
      <div class="header-left">
        <span>202x年8月19日</span>
        <span>星期三</span>
      </div>
      <div class="header-center">
        <span>xxxx管理后台</span>
      </div>
      <div class="header-right flex">
        <span>23℃</span>
        <span>东风</span>
        <span>空气佳</span>
        <span>xx</span>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <dv-border-box-7 class="mainChart">
          <!-- 地图图表 -->
          <MainChart></MainChart>
        </dv-border-box-7>
        <div class="left-bottom">
          <EnergyConsumptionDaily></EnergyConsumptionDaily>
          <EnergyConsumptionMonthly></EnergyConsumptionMonthly>
        </div>
      </div>
      <div class="right">
        <PowerConsumer></PowerConsumer>
        <EnergyConsumptionComparisontion></EnergyConsumptionComparisontion>
        <StructuralAnalysis></StructuralAnalysis>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3'
import MainChart from './components/MainChart.vue'
import EnergyConsumptionComparisontion from './components/EnergyConsumptionComparison.vue'
import PowerConsumer from './components/PowerConsumer.vue'
import EnergyConsumptionDaily from './components/EnergyConsumptionDaily.vue'
import EnergyConsumptionMonthly from './components/EnergyConsumptionMonthly.vue'
import StructuralAnalysis from './components/StructuralAnalysis.vue'
</script>

<style scoped>
.container {
  background: #151e65;
  display: flex;
  flex-direction: column;
}
.header {
  color: #fff;
  height: 79px;
  padding:0 10px 15px;
  align-items: center;
  justify-content: space-between;
  background: url('/imgs/header-bg.png') no-repeat 0% 0%/100% 100%;
}
.header-right {
  justify-content: flex-end;
}
.header-center{
  font-size:30px;
  font-weight:bold;
}
.main {
  width: 100%;
  flex: 1;
  display: flex;
}
.mainChart {
  flex: 1;
}
.right,
.left {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.right{
  width: 500px;
}
.left {
  flex: 1;
}
.left-bottom {
  height: 200px;
  display: flex;
}
.flex {
  display: flex;
}
</style>
