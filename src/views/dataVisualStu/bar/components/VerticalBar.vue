<template>
 <div class="container" ref="container"></div>
</template>

<script setup>
import useEcharts from '@/hooks/useEcharts'

const {
  container,
  chart
} = useEcharts({
    title: {
      text: '基础柱状图',
      left: 'center'
    },
    legend: {
      data: ['温度'],
      left: '60%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#659e86'
        }
      }
    },
    xAxis: {
      type: 'category',
      data: createXAxis()
    },
    yAxis: {
      type: 'value',
      axisLine:{
        show:true
      },
      axisTick:{
        alignWithLabel:true
      }
    },
    series: [{
      type: 'bar',
      name: '温度',
      emphasis:{
        focus:'series'
      },
      data: [19, 24, 23, 25, 20, 19, 25],
      label: {
        show: true,
        position: 'top'
      }
    }]
  });
  
function createXAxis() {
  let data = [];
  for (let i = 0; i < 7; i++) {
    data.push('周' + (i + 1));
  }
  return data;
}
</script>

<style scoped>
 
</style>