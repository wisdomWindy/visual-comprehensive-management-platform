<template>
  <div class="boxplot" ref="boxplot"></div>
</template> 

<script setup>
import useEcharts from '@/hooks/useEcharts';

const {
  container:boxplot
} = useEcharts({
    tooltip:{},
    xAxis: {
      type: 'category',
      data: ['实验0', '实验1']
    },
    yAxis: {
      type: 'value',
      splitArea:{
        show:true
      }
    },
    series: [{
      type: 'boxplot',
      data: [[100, 209, 120, 230, 340, 240], [100, 209, 120, 230, 340, 240]]
    }]
  });

</script>

<style scoped>
.boxplot
{
  height: 100%;
}
</style>