<template>
  <div class="scatter" ref="container">

  </div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';

const {container} = useEcharts({
    legend: {
      data: ['A产品', 'B产品']
    },
    tooltip:{
      trigger:'item'
    },
    xAxis: {},
    yAxis: {},
    series: [{
      type: 'scatter',
      name: 'A产品',
      data: [[10, 20], [20, 10]]
    }, {
      type: 'scatter',
      name: 'B产品',
      data: [[20, 30], [23, 26]]
    }]
  });
</script>

<style scoped>
.scatter
{
  height: 100%;
}
</style>