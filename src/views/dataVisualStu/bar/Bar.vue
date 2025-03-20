<template>
  <div class="container">
    <HorizontalBar class="chart" />
    <VerticalBar class="chart" />
    <StackBar class="chart" />
    <DimensionBar class="chart" />
  </div>
</template>

<script setup>
import HorizontalBar from './components/HorizontalBar.vue'
import VerticalBar from './components/VerticalBar.vue'
import StackBar from './components/StackBar.vue'
import DimensionBar from './components/DimensionBar.vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
.chart {
  width: 50%;
  height: 300px;
}
.chart:nth-child(4){
  width: 100%;
}
</style>
