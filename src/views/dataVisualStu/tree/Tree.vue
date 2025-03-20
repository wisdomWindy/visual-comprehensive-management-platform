<template>
  <div class="tree" ref="tree"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';
const {container:tree} = useEcharts({
    tooltip:{},
    legend: {
      data: [{
        name: 'tree1',
        icon: 'rectangle'
      }]
    },
    series: [{
      type: 'tree',
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
.tree
{
  height: 100%;
}
</style>