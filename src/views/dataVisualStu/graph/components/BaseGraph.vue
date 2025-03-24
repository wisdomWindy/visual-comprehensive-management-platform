<template>
  <div class="graph" ref="graph"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {container:graph} = useEcharts({
    tooltip: {},
    label:{
      show:true
    },
    legend: {
      data: ['男性', '女性']
    },
    series: [{
      type: 'graph',
      layout:'force',
      categories: [{
        name: '男性'
      }, {
        name: '女性'
      }],
      roam:true,
      data: [{
        name: 'A',
        category: 0,
        value:'丈夫'
      }, {
        name: 'B',
        category: 1,
        value:'妻子'
      }],
      links:[{
        source:0,
        target:1,
        value:'夫妻'
      }],
      lineStyle:{
        opacity: 0.9,
        width: 3,
        curveness: 0
      }
    }]
  });
</script>

<style scoped>
.graph{
  width: 50%;
  height: 200px;
}
</style>
