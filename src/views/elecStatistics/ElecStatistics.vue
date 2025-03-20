<template>
 <div class="container">
  <div class="left">
    <HotChart class="chart-item"></HotChart>
    <RankChart class="chart-item"></RankChart>
  </div>
  <div class="main">
    <MapChart class="chart-item"></MapChart>
  </div>

  <div class="right">
    <SellerChart class="chart-item"></SellerChart>
    <StoreCountChart class="chart-item"></StoreCountChart>
    <Trend class="chart-item"></Trend>
  </div>
 </div>
</template>

<script setup lang="ts">
import HotChart from './components/HotChart.vue';
import MapChart from './components/MapChart.vue';
import RankChart from './components/RankChart.vue';
import SellerChart from './components/SellerChart.vue';
import StoreCountChart from './components/StoreCountChart.vue';
import Trend from './components/Trend.vue'
</script>

<style scoped>
 .container{
  display:flex;
  flex-wrap:wrap;
 }
 .main{
  width:39%;
  display:flex;
  flex-direction:column;
 }
 .right,
 .left{
  width:30%;
  height:100%;
  display:flex;
  flex-direction:column;
 }
 .chart-item{
  flex:1;
 }
</style>