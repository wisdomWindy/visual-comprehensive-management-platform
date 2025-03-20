<template>
 <div class="treemap" ref="treemap"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {container:treemap} = useEcharts({
    tooltip: {},
    legend: {
      data: [{
        name: 'tree1',
        icon: 'rectangle'
      }]
    },
    series: [{
      type: 'treemap',
      name: 'tree1',
      data: [{
        name: 'A',
        children: [{
          name: 'A1',
          value: 20
        }, {
          name: 'A2',
          value: 40
        }]
      }]
    }]
  });
</script>

<style scoped>
 .treemap{
  height: 95%;
 }
</style>