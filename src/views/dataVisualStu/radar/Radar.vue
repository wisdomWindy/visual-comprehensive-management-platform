<template>
  <div class="container">
    <BaseRadar class="chart-item"></BaseRadar>
    <Demo></Demo>
  </div>
</template>

<script setup>
import BaseRadar from './components/BaseRadar.vue'
import Demo from './components/Demo.vue'
</script>

<style scoped>
.chart-item{
  height:300px;
}
</style>