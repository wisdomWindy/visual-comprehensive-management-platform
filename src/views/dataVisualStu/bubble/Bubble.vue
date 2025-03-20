<template>
  <div class="buble" ref="buble"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts';

const {container:buble} = useEcharts({
    xAxis: {},
    yAxis: {},
    legend: {
      data: ['A产品', 'B产品']
    },
    series: [{
      name: 'A产品',
      type: 'scatter',
      data: [[20, 10, 12], [25, 12, 23]],
      symbolSize: function (data) {
        return data[2];
      }
    }, {
      name: 'B产品',
      type: 'scatter',
      data: [[24, 13, 19], [22, 15, 33]],
      symbolSize: function (data) {
        return data[2];
      }
    }]
  });

</script>

<style scoped>
.buble
{
  height: 100%;
}
</style>