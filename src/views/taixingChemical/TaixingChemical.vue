<template>
  <div class="container">
    <div class="header flex">
      <div class="header-left">
        <span>202x年8月19日</span>
        <span>星期三</span>
      </div>
      <div class="header-center">
        <span>泰兴化工管理后台</span>
      </div>
      <div class="header-right flex">
        <span>23℃</span>
        <span>东风</span>
        <span>空气佳</span>
        <span>泰兴</span>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <dv-border-box-7 class="mainChart">
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
  height: 30px;
  align-items: center;
  justify-content: space-between;
  background-image: url('@/assets/img/header-bg.png');
}
.header-right {
  justify-content: flex-end;
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
